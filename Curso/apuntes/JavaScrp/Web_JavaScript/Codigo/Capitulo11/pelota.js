let anchoVentana, altoVentana;

let pelota;
const tamanioPelota = 25;
let pelotaX, pelotaY;

let velocidadX = 2;
let velocidadY = 2;

window.addEventListener("load", iniciarJuego);

function iniciarJuego(){
  anchoVentana = window.innerWidth;
  altoVentana = window.innerHeight;
  pelotaX = Math.random() * (anchoVentana - tamanioPelota);
  pelotaY = Math.random() * (altoVentana - tamanioPelota);
  pelota = document.getElementById("pelota");
  pelota.style.width = tamanioPelota + "px";
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
  pelota.style.display = "block";
  window.setInterval(moverPelota, 1);
}
function moverPelota(){
  pelotaX += velocidadX;
  pelotaY += velocidadY;
  if (pelotaX <= 0 || pelotaX >= anchoVentana - tamanioPelota) velocidadX = -velocidadX;
  if (pelotaY <= 0 || pelotaY >=  altoVentana - tamanioPelota) velocidadY = -velocidadY;
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
}