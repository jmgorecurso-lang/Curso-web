const datos = document.getElementById("datos");
let alfa, beta, gamma;

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", mostrarDatos);
  }
else alert ("Datos no dispobibles");

function mostrarDatos(evento){
  alpha = Math.round(evento.alpha); // eje Z. Giro en posición horizontal
  beta = Math.round(evento.beta); // ejeX. Balanceo adelante y atrás 
  gamma = Math.round(evento.gamma); // eje Y. Giro en posición vertical
  datos.innerHTML = alfa + ", " + beta + ", " + gamma;
}