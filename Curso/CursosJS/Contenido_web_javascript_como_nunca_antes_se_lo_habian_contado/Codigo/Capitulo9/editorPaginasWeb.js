let offsetX, offsetY;
let ratonPulsado = false;
let elemento;

document.addEventListener("mousedown", function(evento) {
    elemento = evento.target;
    if(elemento.nodeName != "HTML"){
        ratonPulsado = true;
        offsetX = evento.offsetX;
        offsetY = evento.offsetY;
    }
});

document.addEventListener("mouseup", function() {
    ratonPulsado = false;
});

document.addEventListener("mousemove", function(evento) {
    evento.preventDefault();
    if (ratonPulsado) {
        elemento.style.left = evento.clientX - offsetX;
        elemento.style.top  = evento.clientY - offsetY;
    }
});