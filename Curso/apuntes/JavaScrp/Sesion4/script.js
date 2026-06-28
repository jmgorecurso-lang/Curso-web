/*
let edad = 20;
// el ? actua como un IF y los dos puntos como un Else
let mensaje = (edad>=18) ? "Eres mayor de edad": "No eres mayor de edad";
console.log(mensaje);

let beca=false;
let mens = (beca) ? "Tienes la beca" : "No tienes beca";
console.log(mens);

//Empezamos a modificar el index
document.getElementById("titulo").innerHTML="Mi Primer titulo con JavaScript";
document.getElementById("sub2").innerHTML="<span style='color:red'>Cambiamos el h2</span>";
let sub= prompt ("pon un titulo para h3");
document.getElementById("sub3").innerHTML=`Titulo ${sub}`;
let btnOculto;
document.getElementById(btnOculto).style.display="none";


//buscando selector id o class. Trabaja con id, class o nombre
document.querySelector("h4").innerText="Estoy programando en Javascript";
//body
document.body.style.background ="gray";
//ahora con variables
let mensaje = document.querySelector("p");
mensaje.innerHTML="Buenos dias";
mensaje.style.color="white";
mensaje.style.fontFamily="Arial";

//trabajamos el boton
let btnMensaje = document.getElementById("btn_mensaje");
btnMensaje.innerText = "cambio fondo";
btnMensaje.style.background="black";
btnMensaje.style.color="white";
btnMensaje.style.padding="15px";
btnMensaje.style.borderRadius="15px";
//funciones
//Funcion anonima o directa
btnMensaje.addEventListener ("click", function(){
    document.body.style.background ="black";
    document.body.style.color ="white";
});
let btnCaos = document.getElementById("btn_caos");
btnCaos.innerText ="Pruebame";
// btnCaos.addEventListener ("click", function(){
//     document.querySelector("h1").innerText="Las cagao..."
//     document.querySelector("h2").innerText=""

// funcion nominal
function borrarMensaje(){
    mensaje.innerText="";
}
borrarMensaje();
*/
console.clear();
let imagenOrig=true;

let imagen1 = document.querySelector("img");
imagen1.src="https://boxalbums.com/uploads/covers/cover-EVzKODQMolUDd9YdNnxu.jpg";
imagen1.style.width="55%";
imagen1.style.borderRadius="25%";
// funcion cambia imagen
let borra_imagen = document.getElementById("btn_borra_imagen");

function CambiarImagen(){
    if(imagenOrig){
    imagen1.src="https://boxalbums.com/uploads/covers/cover-EsGFKKEmRpyUY3AZb15t.jpg";
    imagenOrig=false;
}else {imagen1.src="https://boxalbums.com/uploads/covers/cover-EVzKODQMolUDd9YdNnxu.jpg"}
imagenOrig=true;
}
function borraImagen(){
    imagen1.src="";
    mostrar_Imagen.style.display ="inline-block";
    borra_imagen.style.display="none";
}
let mostrar_Imagen = document.getElementById("btn_mostrar_imagen");
mostrar_Imagen.style.display="none";

function mostrarImagen(){
    imagen1.src="https://boxalbums.com/uploads/covers/cover-EVzKODQMolUDd9YdNnxu.jpg";
}