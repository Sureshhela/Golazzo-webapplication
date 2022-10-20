function passwordIcon(){
    let password = document.getElementById('login-Mpin')
    let showPassword = document.getElementById('show')
    let hiedePassword = document.getElementById('hide')

    //Hide and show functionality

    if(password.type === 'password'){
        password.type = 'text'
        showPassword.style.display = 'block'
        hiedePassword.style.display = 'none'
    }

    else{
        password.type = 'password'
        showPassword.style.display = 'none'
        hiedePassword.style.display = 'block'
    }
}

function confirmPassword(){
    let confirmPassword = document.getElementById('login-confirm-password')
    let showPassword = document.getElementById('cnf-show')
    let hiedePassword = document.getElementById('cnf-hide')

    if(confirmPassword.type === 'password'){
        confirmPassword.type = 'text'
        showPassword.style.display = 'block'
        hiedePassword.style.display = 'none'
    }

    else{
        confirmPassword.type = 'password'
        showPassword.style.display = 'none'
        hiedePassword.style.display = 'block'
    }
}


// function menuFunction(x) {
//     x.classList.toggle("closemenu");
//     var element = document.getElementById("nav-bar");
//     element.classList.add("activesidebar");

//   }


  function sidebarFunction(x) {
        // x.classList.toggle("closemenu");
    var element = document.getElementById("menuslider");
    element.classList.add("activesidebar");
  }
  
  function closeFunction() {
    var element = document.getElementById("menuslider");
    element.classList.remove("activesidebar");
  }
  

  /*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));


// payment

let paymentOpt = document.querySelectorAll(".payment-option div");
let card = document.querySelectorAll(".card-mode");
let pPal = document.querySelectorAll(".paypale");


for (let div of paymentOpt) {

  div.addEventListener('click', (e) => {

    const et = e.target;
    const activate = document.querySelector(".activate");

    if (activate) {
      activate.classList.remove("activate");
    }

    et.classList.add("activate");

      if(div.getAttribute('data-number') === 1 ) {
        card.style.display = "block";
        pPal.style.display = "none";
       }

      else if(div.getAttribute('data-number') === 2 ){

        pPal.style.display = "block";
        card.style.display = "none";

      }

  });

}
