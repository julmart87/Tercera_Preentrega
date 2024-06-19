let miFormulario = document.getElementById("formulario");
const nombreForm = document.getElementById('nombreForm');
const emailForm = document.getElementById('emailForm');
const textForm = document.getElementById('textForm');
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');

mainContact.appendChild(divContact);

miFormulario.addEventListener("submit", validarFormulario);

//* Funcion para enviar y validar formulario
function validarFormulario(e) {
    e.preventDefault(); 
    
    let nombre = nombreForm.value.trim();
    let email = emailForm.value.trim();
    let mensaje = textForm.value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '') {
        mostrarMensaje('Por favor, ingresa tu nombre');
        return;
    } if (email === '') {
        mostrarMensaje('Por favor, ingresa tu correo electrónico');
        return;
    } if (mensaje === '') {
        mostrarMensaje('Por favor, ingresa tu mensaje');
        return;
    }
    let emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        mostrarMensaje('Por favor, ingresa un correo electrónico válido');
        return;
    };  
    mostrarMensaje('Formulario validado correctamente. Enviando...');
};

function mostrarMensaje(mensaje) {
    textContact.textContent = mensaje;
    divContact.appendChild(textContact);
    setTimeout(function() {
        divContact.removeChild(textContact);
    }, 3000); // Remueve el mensaje después de 3 segundos
};






