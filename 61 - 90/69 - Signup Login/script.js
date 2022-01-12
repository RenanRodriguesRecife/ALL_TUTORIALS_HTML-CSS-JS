let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let signupForm = document.querySelector(".signup .form");
let loginForm = document.querySelector(".login .form");
let signupMessage = document.querySelector(".signup .message");
let loginMessage = document.querySelector(".login .message");
let signupActivator = document.querySelector(".signup-activator");
let loginActiator = document.querySelector(".login-activator");

login.addEventListener('click',function(){
    signupForm.style.opacity = 0;
    signupForm.style.visibility = 'hidden';
    signupMessage.style.opacity = 1;
    signupMessage.style.visibility = 'visible';

    loginForm.style.opacity = 1;
    loginForm.style.visibility = 'visible';
    loginMessage.style.opacity = 0;
    loginMessage.style.visibility = 'hidden';

    signupActivator.style.backgroundColor = '#2f2f2f';
    loginActiator.style.backgroundColor = '#c03546';
})