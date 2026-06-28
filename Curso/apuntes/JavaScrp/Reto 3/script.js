document.addEventListener("DOMContentLoaded",function(){

})
let mensaje1 = document.querySelector("p");
let imagenOrigen = true;
    let imagen1 = document.querySelector("img");
    imagen1.src="images/risa.webp";
    let borra_imagen = document.getElementById("oculta_imagen");



function mensaje(){

    mensaje1.innerText="Estas aprendiendo JavaScript";
}
function borraMensaje(){
    mensaje1.innerText="";
}
function reset(){

    document.body.style.background="#51C9F5";
      mensaje1.innerText="";
      imagen1.src="images/risa.webp";
       document.querySelector(".container").style.color="black";

}
function cambiaImagen(){

    if(imagenOrigen){
        imagen1.src="images/serio.jpg";
        imagenOrigen=false;
        imagen1.style.border="groove 8px white";
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