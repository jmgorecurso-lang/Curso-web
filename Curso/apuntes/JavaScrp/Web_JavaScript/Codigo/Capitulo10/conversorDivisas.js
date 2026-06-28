debugger;
const eurosLibra = 1.1532;
const eurosDolar = 0.9449;
const eurosYen = 0.0063;

let eurosDivisa = eurosLibra;

const campoDivisa = document.getElementById("campoDivisa");
const campoEuro = document.getElementById("campoEuro");
const menuDivisas = document.getElementById("menuDivisas");
const boton = document.getElementById("botonConversion");

asociarControladores();

function asociarControladores(){
    menuDivisas.addEventListener("change", seleccionarDivisa);
    boton.addEventListener("click", convertirDivisa);
    campoEuro.addEventListener("focus", quitarFoco);
}
function seleccionarDivisa(){
    console.log("Se ha seleccionado la opción: " + menuDivisas.value);
    switch (menuDivisas.value){
        case "libra": eurosDivisa = eurosLibra; break;
        case "dolar": eurosDivisa = eurosDolar; break;
        case "yen": eurosDivisa = eurosYen;
    }
}
function convertirDivisa(){
    console.log("Factor de conversión:" + eurosDivisa);
    let valorDivisas = campoDivisa.value;
    if (valorDivisas && Number(valorDivisas) >= 0){
        let valorEuros = valorDivisas * eurosDivisa;
        campoEuro.value = valorEuros.toFixed(2);
    }
    else campoEuro.value = "";
}
function quitarFoco(){
    campoEuro.blur();
}