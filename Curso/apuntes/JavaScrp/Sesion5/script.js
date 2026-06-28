document.addEventListener("DOMContentLoaded",function(){

})
//si hacemos on click en el html debe estar fuera del evenlistener
function mensaje3(){
document.querySelector ("h3").innerHTML="Hola JS desde archivo externo";
// igual que el onclick en html
// document.getElementById("btnMensaje3").addEventListener("click",mensaje3)
// habilitamos el boton2
let mensaje2 = document.getElementById("btnMensaje2");//llamamos al id del boton
mensaje2.disabled= false;
mensaje2.style.cursor='pointer';

}
