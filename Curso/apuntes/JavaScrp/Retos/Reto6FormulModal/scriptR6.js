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



/////////////////////////////////////////////////////////
// Script para el Modal
//declaramos variables
const modal = document.getElementById("modalGracias");
const cerrarEquis = document.getElementById("cerrarModalEquis");
const cerrarBoton= document.getElementById("cerrarModalBoton");
//const btnAbrir = document.getElementById("btnAbrirEjemplo");

function abrirModal() {
    modal.classList.add("active");
}
function cerrarModal (){
    //modal.classList.remove ("active");
    location.reload();
}
// ejemplo: abrir modal al hacer click
//btnAbrir.addEventListener("click",abrirModal);

//Cerrar si hacemos clic fuera del contenido de la modal (en el overlay)
function cerrarSiClickFuera (event){
    if(event.target ===modal){
        cerrarModal();
    }
}
// Eventos para cerrar
cerrarEquis.addEventListener ("click", cerrarModal);
cerrarBoton.addEventListener ("click", cerrarModal);
modal.addEventListener ("click", cerrarSiClickFuera);

//Cerrar con la tecla ESC con "keydown"
document.addEventListener("keydown", function (event){
    if (event.key ==="Enter" && modal.classList.contains("active")){
        cerrarModal();
    }
});
// enviamos formulario

formulario.addEventListener ("submit",function (e){
    e.preventDefault();//Detiene el envio
    abrirModal();
    //envia formulario
    setTimeout(function(){
        formulario.submit();
    }, 3000);

    });