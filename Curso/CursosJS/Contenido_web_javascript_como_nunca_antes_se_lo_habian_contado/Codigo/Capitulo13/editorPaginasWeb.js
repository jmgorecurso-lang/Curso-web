let offsetX, offsetY;
let elemento;

document.addEventListener("touchstart", function(evento) {
    const puntoContacto = evento.targetTouches[0];
    elemento = puntoContacto.target;
    if(elemento.nodeName != "HTML"){
        offsetX = puntoContacto.clientX - elemento.getBoundingClientRect().left;
        offsetY = puntoContacto.clientY - elemento.getBoundingClientRect().top;
    }
});

document.addEventListener("touchmove", function(evento) {
    evento.preventDefault();
    const puntoContacto = evento.changedTouches[0];
    elemento.style.left = puntoContacto.clientX - offsetX;
    elemento.style.top  = puntoContacto.clientY - offsetY;
});