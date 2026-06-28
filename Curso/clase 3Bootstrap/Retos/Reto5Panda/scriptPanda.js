const formulario = document.getElementById("miForm");
const inputMail = document.getElementById ("email");
const nombre = document.getElementById ("nombre");
const apellidos = document.getElementById ("apellido");
const checkbox = document.getElementById("otro");
const limpiar = document.getElementById("limpiar")
const btnEnviar = document.getElementById("enviar");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarFormulario (){
    const mailCorrecto = regexEmail.test(inputMail.value);
   
}

