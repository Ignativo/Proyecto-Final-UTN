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
