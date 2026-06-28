const imagen = document.getElementById("imagen");
const menu = document.getElementById("menu");
const historia = document.getElementById("historia");
const tarifas = document.getElementById("tarifas");
const horario = document.getElementById("horario");

imagen.addEventListener("click", despliegaMenu);
menu.addEventListener("click", pulsarMenu);
historia.addEventListener("click",pulsarOpcion);
tarifas.addEventListener("click", pulsarOpcion);
horario.addEventListener("click", pulsarOpcion);

function despliegaMenu(evento) {
    if (evento.button == 0) {
        menu.style.display = "block";
        menu.style.top = evento.pageY;
        menu.style.left = evento.pageX;
    }
}

function pulsarOpcion(evento){
    menu.style.display = "none";
    alert("Se ha pulsado sobre una opción");
}
function pulsarMenu(){
    menu.style.display = "none";
    alert("Se ha pulsado sobre el menú");
}
