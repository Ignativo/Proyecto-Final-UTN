const botonAviso = document.getElementById("cerrar-aviso");
const ventanaModal = document.getElementById("ventana-modal");
const fondoModal = document.getElementById("fondo-modal");

//Codigo Modal visto en clases ;)


if(!sessionStorage.getItem("ventana-modal-visto")){
    ventanaModal.classList.add("activo") 
    fondoModal.classList.add("activo") 
};

botonAviso.addEventListener("click", () =>{ 
    ventanaModal.classList.remove("activo");
    fondoModal.classList.remove("activo");
    sessionStorage.setItem("ventana-modal-visto", true)
});


let modal = document.getElementById("ventana-modal");

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        playErrorSound();
    }
});

function playErrorSound() {
    let audio = new Audio('media/error-incorrecto.mp3');
    audio.play();
};



/* Boton login y register */

let loginBtn = document.getElementById('login-btn');
let loginModal = document.getElementById('login-modal');
let closeBtn = document.getElementById('close-btn');
let registerLink = document.getElementById('register-link');
let registerModal = document.getElementById('register-modal');
let closeBtnRegister = document.getElementById('close-btn-register');
let loginLink = document.getElementById('login-link');
let loginSubmit = document.getElementById('login-submit');
let registerSubmit = document.getElementById('register-submit');

loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

registerLink.addEventListener('click', function() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

closeBtnRegister.addEventListener('click', function() {
    registerModal.style.display = 'none';
});

loginLink.addEventListener('click', function() {
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
});

loginSubmit.addEventListener('click', function() {
  // Aquí puedes agregar la lógica para el inicio de sesión
    loginModal.style.display = 'none';
});

registerSubmit.addEventListener('click', function() {
  // Aquí puedes agregar la lógica para el registro
    registerModal.style.display = 'none';
    loginModal.style.display = 'block'; // Vuelve al modal de inicio de sesión
});
