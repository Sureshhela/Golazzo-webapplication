const track = document.querySelector(".carouselTrack");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".banner-nav");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const upDateDot = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  upDateDot(currentDot, targetDot);
});

let i = 0;
setInterval(() => {
  const currentSlide = track.querySelector(".current-slide");
  const targetSlide = slides[i];
  moveToSlide(track, currentSlide, targetSlide);

  const currentDot = dotsNav.querySelector(".current-slide");
  const targetDot = dots[i];
  upDateDot(currentDot, targetDot);

  i++;

  if (i > 1) {
    i = 0;
  }
}, 5000);
