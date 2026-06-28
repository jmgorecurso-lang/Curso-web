const formulario = document.getElementById("miFormulario");
const checkbox = document.getElementById("activar");
const inputEmail = document.getElementById("email");
const feedbackEmail = document.getElementById("email-feedback");
const cajaTexto = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const btnEnviar = document.getElementById("btn-enviar");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarFormulario() {
    const longitud = cajaTexto.value.length;
    const esMailValido = regexEmail.test(inputEmail.value);
    const esMensajeValido = longitud >=10;

    contador.innerText = `Caracteres: ${longitud}`;
    feedbackEmail.innerText = esMailValido ?"✔️ Correo valido":"Correo no valido";
    feedbackEmail.style.color = esMailValido ?"green":"red";
    contador.style.color = esMensajeValido ?"green":"red";
    //hasta que no esté todo correcto no se activa el boton
    btnEnviar.disabled = !(esMailValido && esMensajeValido);
}
function limpiarTodo(){
    formulario.reset();
    location.reload();
}
inputEmail.addEventListener ("input",validarFormulario);
cajaTexto.addEventListener("input",validarFormulario);

checkbox.addEventListener("change",function (){
    if(!this.checked){
        limpiarTodo();
    }else{
        //pequeño delay para enfocar mientras se hace visible
        setTimeout(()=>inputEmail.focus(),300);
    }
});


// // formulario.addEventListener ("submit",function (e){
// formulario.addEventListener ("submit",function (){
//     // e.preventDefault();//Detiene el envio
//     // alert("Enviado con exito");
//     limpiarTodo();

// });

