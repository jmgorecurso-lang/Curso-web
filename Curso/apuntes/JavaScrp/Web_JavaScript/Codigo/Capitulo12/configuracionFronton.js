const campoAnchoRaqueta = document.getElementById("anchoRaqueta");
const campoVelocidadPelota = document.getElementById("velocidadPelota");
const botonConfirmar = document.getElementById("confirmar");
const botonCancelar = document.getElementById("cancelar");
let anchoConfigurado = window.localStorage.getItem("anchoRaqueta");
let velocidadConfigurada = window.localStorage.getItem("velocidadPelota");
if (anchoConfigurado) campoAnchoRaqueta.value = anchoConfigurado;
if (velocidadConfigurada) campoVelocidadPelota.value = velocidadConfigurada;

botonConfirmar.addEventListener("click", function () {
    window.localStorage.setItem("anchoRaqueta", campoAnchoRaqueta.value);
    window.localStorage.setItem("velocidadPelota", campoVelocidadPelota.value);
    window.close();
})
botonCancelar.addEventListener("click", function () {
    window.close();
})