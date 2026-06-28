let pelotaX, pelotaY;
let velocidadX, velocidadY;
const nivelReduccion = 10;

const html = document.documentElement;
const pelota = document.querySelector("img");
const boton = document.querySelector("button");

boton.addEventListener("click", function (evento) {
  boton.style.display = "none";
  if (html.requestFullscreen) { html.requestFullscreen(); }
  else if (html.mozRequestFullScreen) { html.mozRequestFullScreen(); }
  else if (html.webkitRequestFullscreen) { html.webkitRequestFullscreen(); }
  window.screen.orientation.lock('portrait');

  pelotaX = window.innerWidth/2 - pelota.clientWidth/2
  pelotaY = window.innerWidth/2 - pelota.clientHeight/2
  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY+ "px";
  pelota.style.display = "block";
});

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (evento) {
    velocidadY = evento.beta/nivelReduccion;
    velocidadX = evento.gamma/nivelReduccion;
  });
}
else alert("Datos no disponibles");

window.setInterval(moverPelota, 1);

function moverPelota(){
  pelotaX += velocidadX;
  pelotaY += velocidadY;

  if (pelotaX < 0) pelotaX = 0;
  if(pelotaX > window.innerWidth - pelota.clientWidth)
    pelotaX = window.innerWidth - pelota.clientWidth;
  if (pelotaY < 0) pelotaY = 0;
  if(pelotaY >  window.innerHeight - pelota.clientHeight)
    pelotaY =  window.innerHeight - pelota.clientHeight;

  pelota.style.left = pelotaX + "px";
  pelota.style.top = pelotaY + "px";
}
