
const duracionPartida = 10;
const numeroZombis = 5;
let partidaIniciada = false;

let temporizador
let puntuacion;
let tiempo;

const listaZombis = [];
let sangre;

const html = document.querySelector("HTML");
const boton = document.querySelector("button");
const explosion = document.getElementById("explosion");
const fondoMusical = document.getElementById("fondoMusical");
const marcadorPuntuacion = document.getElementById("puntuacion");
const marcadorTiempo = document.getElementById("tiempo");

crearZombis();
crearSangre();

boton.addEventListener("click", iniciarPartida);

window.addEventListener("blur", function(){
  partidaIniciada = false;
  fondoMusical.pause();
});

window.addEventListener("focus", function(){
  partidaIniciada = true;
  fondoMusical.play();
});

function iniciarPartida(){
  if (html.requestFullscreen) { html.requestFullscreen(); }
  else if (html.mozRequestFullScreen) { html.mozRequestFullScreen(); }
  else if (html.webkitRequestFullscreen) { html.webkitRequestFullscreen(); }
  window.screen.orientation.lock('portrait');

  partidaIniciada = true;
  boton.style.display = "none";
  puntuacion = 0;
  tiempo = 0;
  marcadorPuntuacion.innerHTML = "PUNTUACIÓN: " + puntuacion;
  marcadorTiempo.innerHTML = "TIEMPO: " + tiempo;
  marcadorPuntuacion.style.display = "block";
  marcadorTiempo.style.display = "block";

  temporizador = window.setInterval(actualizarPantalla, 500);
  fondoMusical.play();
}
function crearZombis(){
  for(let x = 0; x < numeroZombis; x++){
    const zombi = document.createElement("img");
    html.appendChild(zombi);
    zombi.src ="../Imagenes/zombi.png";
    zombi.style.position = "absolute";
    zombi.style.zIndex = "-1";
    zombi.style.display = "none";
    zombi.addEventListener("touchstart", matarZombi);
    listaZombis[x] = zombi;
  }
}
function crearSangre(){
  sangre = document.createElement("img");
  html.appendChild(sangre);
  sangre.src ="../Imagenes/sangre.png";
  sangre.style.position = "absolute";
  sangre.style.zIndex = "-1";
  sangre.style.display = "none";
}

function actualizarPantalla(){
  if(partidaIniciada){
  sangre.style.display = "none";
  actualizarTiempo();
  actualizarZombis();
  }
}
function actualizarTiempo(){
  tiempo += 0.5;
  if (tiempo >= duracionPartida){
    partidaIniciada = false;
    clearTimeout(temporizador);
    fondoMusical.pause();
    boton.style.display = "block";
  }
  else marcadorTiempo.innerHTML = "TIEMPO: " + Math.round(tiempo);
}
function actualizarZombis(){
  let zombiX, zombiY;
  for(let x = 0; x < numeroZombis; x++){
    const zombi = listaZombis[x];
    if(Math.random() > 0.5){
      zombiX = Math.random()*(window.innerWidth - zombi.clientWidth);
      zombiY = Math.random()*(window.innerHeight - zombi.clientHeight);
      zombi.style.left = zombiX + "px";
      zombi.style.top = zombiY + "px";
      zombi.style.display = "block";
    }
  }
}
function matarZombi(evento) {
  if(partidaIniciada){
    explosion.currentTime=0;
    explosion.play();
    const zombi = evento.target;
    const puntoContacto = evento.changedTouches[0];
    puntuacion += 1;
    marcadorPuntuacion.innerHTML = "PUNTUACIÓN: " + puntuacion;
    zombi.style.display = "none";
    sangre.style.display = "block";
    sangre.style.left = puntoContacto.clientX - sangre.clientWidth/2 + "px";
    sangre.style.top  = puntoContacto.clientY - sangre.clientHeight/2 + "px";
  }
}
