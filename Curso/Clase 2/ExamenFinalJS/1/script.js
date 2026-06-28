document.addEventListener("DOMContentLoaded",function(){})
let imagenOrigen=true;
    let imagen1 = document.querySelector('img');
    imagen1.src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGlnb3xlbnwwfDB8MHx8fDA%3D";
function cambiaTexto(){
    document.querySelector('p').innerHTML="";
    document.querySelector ('p').innerHTML ="¡ JavaScript es poderoso 🚀!";
    document.querySelector('.content-box').style.background='yellow';
}
function colorFondo (){
    document.body.style.background="black";
    document.querySelector('.container').style.background='gray';
}
function mostrarMensaje(){
   document.querySelector('h3').innerHTML="¡Felicidades!<br>Sabes usar JS para hacer páginas interactivas";
}
function ocultar(){
    document.querySelector('h3').innerHTML="";
}
function cambiaImagen(){

    if(imagenOrigen){
        imagen1.src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGlnb3xlbnwwfDB8MHx8fDA%3D";
        imagenOrigen=false;
    }else{
        imagen1.src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGlnb3xlbnwwfDB8MHx8fDA%3D";
        imagenOrigen=true;
    }
}
function reset(){
    location.reload();
}