let idTemporizador;

let offsetX;
let ratonPulsado = false;
let elemento;

let numeroPelota = 0;
let numeroPelotas = 3;
let marcador;

let anchoVentana, altoVentana;

let pelota;
const tamanioPelota = 25;
let pelotaX, pelotaY;
let velocidadX = 1;
let velocidadY = 1;

let raqueta;
let anchoRaqueta = 100;
const altoRaqueta = 30;
let raquetaX, raquetaY;
let velocidadRaqueta = 5;

let anchoConfigurado; //<--
let velocidadConfigurada; //<--
let juegoPausado = false; //<--
let juegoFinalizado = false; //<--
let botonConfiguracion; //<--

window.addEventListener("load", iniciarJuego);
document.addEventListener("mousedown", pulsarRaton);
document.addEventListener("mouseup", soltarRaton);
document.addEventListener("mousemove", moverRaqueta);

window.addEventListener("blur", function () { //<--
  juegoPausado = true;
});
window.addEventListener("focus", function () { //<--
  if(!juegoFinalizado) iniciarJuego();
});

idTemporizador = window.setInterval(moverPelota, 1);

function iniciarJuego(){
  anchoVentana = window.innerWidth;
  altoVentana = window.innerHeight;

  anchoConfigurado = window.localStorage.getItem("anchoRaqueta"); //<--
  velocidadConfigurada = window.localStorage.getItem("velocidadPelota"); //<--
  if (anchoConfigurado) anchoRaqueta = parseInt(anchoConfigurado); //<--
  if (velocidadConfigurada){ //<--
    velocidadX = parseInt(velocidadConfigurada);
    velocidadY = parseInt(velocidadConfigurada);
  }
  botonConfiguracion = document.getElementById("configuracion");//<--
  botonConfiguracion.addEventListener("click", function () { //<--
    if(!juegoFinalizado) window.open("configuracionFronton.html", "configuracion", "width=400,height=200");
  });

  marcador = document.getElementById("marcador");

  numeroPelota = 0;
  pelota = document.getElementById("pelota");
  iniciarPelota();
  raqueta = document.getElementById("raqueta");
  raqueta.style.width = anchoRaqueta + "px";
  raqueta.style.height = altoRaqueta + "px";
  raquetaX = anchoVentana / 2 - anchoRaqueta / 2;
  raquetaY = altoVentana - altoRaqueta;
  raqueta.style.left = raquetaX + "px";
  raqueta.style.top = raquetaY + "px";
  raqueta.style.display = "block";
  juegoPausado = false; //<--
}
function moverPelota(){
  if (juegoPausado) return; //<--
  pelotaX += velocidadX;
  pelotaY += velocidadY;
  if (pelotaX <= 0 || pelotaX >= anchoVentana - tamanioPelota) velocidadX = -velocidadX;
  if (pelotaY <= 0) velocidadY = -velocidadY;
  if (((pelotaX >= raquetaX - tamanioPelota + 10) && (pelotaX < raquetaX + anchoRaqueta - 10)) && 
      (pelotaY >= raquetaY - tamanioPelota)){
        velocidadY = -velocidadY;
        pelotaY = raquetaY - tamanioPelota;
      }
  if ((pelotaY >= altoVentana - tamanioPelota)){
    if(numeroPelota < numeroPelotas) iniciarPelota();
    else{
      pelota.style.display = "none";
      ratonPulsado = false;
      if(window.confirm("¿Desea comenzar otra partida?")){
        iniciarJuego();
      }
      else{
        window.clearInterval(idTemporizador);
        marcador.innerHTML = "FIN DE PARTIDA";
        juegoFinalizado = true; //<--
      }
    }
  }
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
}
function moverRaqueta(evento) {
  evento.preventDefault();
  if (ratonPulsado){
    raquetaX = evento.clientX - offsetX;
    if(raquetaX > anchoVentana - anchoRaqueta) raquetaX = anchoVentana - anchoRaqueta;
    else if(raquetaX < 0) raquetaX = 0;
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
function pulsarRaton(evento){
  elemento = evento.target;
  if(elemento.id == "raqueta"){
      ratonPulsado = true;
      offsetX = evento.offsetX;
  }
}
function soltarRaton() {
  ratonPulsado = false;
}