document.addEventListener("DOMContentLoaded",function(){

})
// declaro variables
let mensaje1 = document.querySelector("p");
let imagenOrigen = true;
    let imagen1 = document.querySelector("img");
    imagen1.src="images/risa.webp";
    let borra_imagen = document.getElementById("oculta_imagen");
    let mensajeborra = document.getElementById("borra");
    mensajeborra.disabled=true;
// en el boton indico que el boton de borrado está inhabilitado
// al pulsarlo cambio cursor y estilo del boton deshabilitado
//para que sea igual que los otros
function mensaje(){

    mensaje1.innerText="Estas aprendiendo JavaScript";
    mensajeborra.disabled= false;
    mensajeborra.style.background="green";
    mensajeborra.style.cursor="pointer";
    mensajeborra.style.background="black";
}
function borraMensaje(){
    mensaje1.innerText="";
}
function reset(){
    location.reload();
}
function cambiaImagen(){

    if(imagenOrigen){
        imagen1.src="images/serio.jpg";
        imagenOrigen=false;
        imagen1.style.border="groove 8px white";
        imagen1.style.transitionDuration="1s";
    }else {imagen1.src="images/risa.webp";
        imagenOrigen=true;
        imagen1.style.border="groove 8px red";
    }
}
function ocultaImagen() {
    imagen1.src="";
    imagen1.style.border="none";
}
// botoneras de color
function rojo(){
    document.body.style.background="#EB7F13";
     document.querySelector(".container").style.color="black";
}
function gris(){
    document.body.style.background="gray";
     document.querySelector(".container").style.color="black";
}
function azul(){
    document.body.style.background="blue";
    document.querySelector(".container").style.color="white";
}