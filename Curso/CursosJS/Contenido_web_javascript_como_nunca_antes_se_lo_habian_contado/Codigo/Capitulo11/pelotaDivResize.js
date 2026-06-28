let intervaloId;
let redimensionando = false;

let contenedor;
let anchoContenedor, altoContenedor;
let contenedorX, contenedorY;

let pelota;
const tamanioPelota = 25;
let pelotaX, pelotaY;

let velocidadX = 2;
let velocidadY = 2;

window.addEventListener("load", iniciarJuego);
window.addEventListener("resize", redimensionarPantalla);

function iniciarJuego(){
  contenedor = document.getElementById("contenedor");
  contenedorX = contenedor.getBoundingClientRect().left;
  contenedorY = contenedor.getBoundingClientRect().top;
  anchoContenedor = contenedor.clientWidth;
  altoContenedor = contenedor.clientHeight;
  pelotaX = Math.random() * (anchoContenedor - contenedorX - tamanioPelota);
  pelotaY = Math.random() * (altoContenedor - contenedorY - tamanioPelota);
  pelota = document.getElementById("pelota");
  pelota.style.width = tamanioPelota + "px";
  pelota.style.display = "block";
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
  window.setInterval(moverPelota, 1);
}
function moverPelota(){
  pelotaX += velocidadX;
  pelotaY += velocidadY;
  if (pelotaX <= 0 || pelotaX >= anchoContenedor - tamanioPelota) velocidadX = -velocidadX;
  if (pelotaY <= 0 || pelotaY >=  altoContenedor - tamanioPelota) velocidadY = -velocidadY;
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
}

function redimensionarPantalla(){
  pelota.style.display = "none";
  if(redimensionando) window.clearTimeout(intervaloId);
  else redimensionando = true;
  intervaloId = window.setTimeout(reiniciarJuego, 200);
}
function reiniciarJuego(){
  redimensionando = false;
  iniciarJuego();
}