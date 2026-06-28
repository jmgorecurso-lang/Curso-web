let idTemporizador;
let marcador;

let numeroPelota; 
let numeroPelotas = 3;

let anchoVentana, altoVentana;

let pelota;
const tamanioPelota = 25;
let pelotaX, pelotaY;
let velocidadX = 1;
let velocidadY = 1;

let raqueta;
const anchoRaqueta = 100;
const altoRaqueta = 30;
let raquetaX, raquetaY;
const velocidadRaqueta = 5;

window.addEventListener("load", iniciarJuego);
window.addEventListener("keydown", moverRaqueta);

idTemporizador = window.setInterval(moverPelota, 1);

function iniciarJuego(){
  anchoVentana = window.innerWidth;
  altoVentana = window.innerHeight;

  marcador = document.getElementById("marcador");
  pelota = document.getElementById("pelota");
  raqueta = document.getElementById("raqueta");

  numeroPelota = 0;
  iniciarPelota();
  iniciarRaqueta();
}

function moverPelota(){
  pelotaX += velocidadX;
  pelotaY += velocidadY;
  if (pelotaX <= 0 || pelotaX >= anchoVentana - tamanioPelota)
      velocidadX = -velocidadX;
  if (pelotaY <= 0) velocidadY = -velocidadY;
  if (((pelotaX >= raquetaX - tamanioPelota + 10) && 
       (pelotaX < raquetaX + anchoRaqueta - 10)) && 
       (pelotaY >= raquetaY - tamanioPelota)){
      velocidadY = -velocidadY;
      pelotaY = raquetaY - tamanioPelota;
  }
  if ((pelotaY > altoVentana - tamanioPelota)){
    console.log(numeroPelota);
    if(numeroPelota < numeroPelotas){
      iniciarPelota();
    }
    else{
      pelota.style.display = "none";
      if(window.confirm("¿Desea comenzar otra partida?")){
        iniciarJuego();
      }
      else{
        window.clearInterval(idTemporizador);
        marcador.innerHTML = "FIN DE PARTIDA";
      }
    }
  }
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
}

function moverRaqueta(evento){
  if(evento.key === "ArrowRight"){
    raquetaX += velocidadRaqueta;
    if(raquetaX > anchoVentana - anchoRaqueta) 
        raquetaX = anchoVentana - anchoRaqueta;
    raqueta.style.left = raquetaX + "px";
  }
  if(evento.key === "ArrowLeft"){
    raquetaX -= velocidadRaqueta;
    if(raquetaX < 0) raquetaX = 0;
    raqueta.style.left = raquetaX + "px";
  }
}

function iniciarPelota(){
  pelota.style.width = tamanioPelota + "px";
  pelotaX = Math.random() * (anchoVentana - tamanioPelota);
  pelotaY = Math.random() * altoVentana / 2;
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
  pelota.style.display = "block";
  numeroPelota += 1;
  marcador.innerHTML = `Pelota ${numeroPelota}`;
}
function iniciarRaqueta(){
  raqueta.style.width = anchoRaqueta + "px";
  raqueta.style.height = altoRaqueta + "px";
  raquetaX = anchoVentana / 2 - anchoRaqueta / 2;
  raquetaY = altoVentana - altoRaqueta;
  raqueta.style.left = raquetaX + "px";
  raqueta.style.top = raquetaY + "px";
  raqueta.style.display = "block";
} 
