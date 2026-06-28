mostrarDimensiones();

window.addEventListener("resize", mostrarDimensiones);

function mostrarDimensiones(){
  let ancho = window.outerWidth;
  let alto = window.outerHeight;
  document.querySelector("h2").innerHTML = "Ancho: " + ancho + ", Alto: " + alto;
}