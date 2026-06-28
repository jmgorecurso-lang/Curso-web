let correccion = 90;
let giro;

const html = document.documentElement;
const h1 = document.querySelector("h1");
const boton = document.querySelector("button");

boton.addEventListener("click", function (evento) {
  boton.style.display = "none";
  h1.style.display = "block";
  if (html.requestFullscreen) { html.requestFullscreen(); }
  else if (html.mozRequestFullScreen) { html.mozRequestFullScreen(); }
  else if (html.webkitRequestFullscreen) { html.webkitRequestFullscreen(); }
  window.screen.orientation.lock('portrait-primary');
});

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (evento) {
    giro = Math.round(evento.alpha);
    h1.style.transform = `rotate(${giro + correccion}deg)`;
  });
}
else alert("Datos no dispobibles");