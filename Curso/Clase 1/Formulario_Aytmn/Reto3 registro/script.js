let anchoPopup = 400;
let altoPopup = 200;

function abrirPagina(event) {
    event.preventDefault(); // Evita que el formulario se envíe realmente
    window.location.href= "confirmado.html";
}
function abrirPopup(){
    window.open("indexreto3.html","popupLogin",`width=${anchoPopup},height=${altoPopup}`);
}