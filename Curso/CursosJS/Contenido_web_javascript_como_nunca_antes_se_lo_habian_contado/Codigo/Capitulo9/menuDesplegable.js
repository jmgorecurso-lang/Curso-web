const imagen = document.getElementById("imagen");
const subtitulo = document.getElementById("subtitulo");
const contenido = document.getElementById("contenido");
const menu = document.getElementById("menu");
const historia = document.getElementById("historia");
const tarifas = document.getElementById("tarifas");
const horario = document.getElementById("horario");

imagen.addEventListener("click", despliegaMenu);
historia.addEventListener("click", mostrarHistoria);
historia.addEventListener("mouseover", marcarOpcion);
historia.addEventListener("mouseout", desmarcarOpcion);
tarifas.addEventListener("click", mostrarTarifas);
tarifas.addEventListener("mouseover",  marcarOpcion);
tarifas.addEventListener("mouseout",  desmarcarOpcion);
horario.addEventListener("click", mostrarHorario);
horario.addEventListener("mouseover",  marcarOpcion);
horario.addEventListener("mouseout",  desmarcarOpcion);

document.addEventListener("keydown", ocultarMenu);

function despliegaMenu(evento) {
    if (evento.button == 0) {
        menu.style.display = "block";
        menu.style.top = evento.pageY;
        menu.style.left = evento.pageX;
    }
}

function mostrarHistoria(){
    menu.style.display = "none";
    subtitulo.innerHTML = "Historia"
    contenido.innerHTML = "El anfiteatro Flavio es el monumento más significativo de la antigua Roma. Fue comenzado por el emperador Vespasiano en el año 72 y completado por su hijo Tito en el año 80";
}
function mostrarTarifas(){
    menu.style.display = "none";
    subtitulo.innerHTML = "Tarifas"
    contenido.innerHTML = "El precio de las entradas es de 18 € la básica o de 23,50 € con audioguía. Además, dispone de una visita guiada de una hora de duración por 39€.";
}
function mostrarHorario(){
    menu.style.display = "none";
    subtitulo.innerHTML = "Horario"
    contenido.innerHTML = "El horario de apertura del Coliseo es de 9:00 a 16:30 todos los días del año (excepto del 25 de diciembre y el 1 de enero). No se puede entrar una hora antes del cierre";
}
function marcarOpcion(evento){
    const opcion = evento.target;
    opcion.style.backgroundColor = "white";
}
function desmarcarOpcion(evento){
    const opcion = evento.target;
    opcion.style.backgroundColor = "inherit";
}
function ocultarMenu(evento){
    if(evento.key === "Escape")
        menu.style.display = "none";
}