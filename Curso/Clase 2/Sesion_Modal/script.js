//declaramos variables
const modal = document.getElementById("modalAgradecimiento");
const cerrarEquis = document.getElementById("cerrarModalEquis");
const cerrarBoton= document.getElementById("cerrarModalBoton");
const btnAbrir = document.getElementById("btnAbrirEjemplo");

function abrirModal() {
    modal.classList.add("active");
}
function cerrarModal (){
    modal.classList.remove ("active");
}
// ejemplo: abrir modal al hacer click
btnAbrir.addEventListener("click",abrirModal);

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
