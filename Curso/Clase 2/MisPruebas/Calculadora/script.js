let operacion = "";
let resultado = false;

// declaramos funcion para borrar la pantalla
function limpiar() {
    operacion = "";
    document.getElementById("pantalla").innerText = "0";
    document.getElementById("pantalla").style.color="white";
}
// declaramos funcion para borrar ultimo caracter
function borrar() {
    operacion = operacion.slice(0, -1);
    document.getElementById("pantalla").innerText = operacion || "0";
}
//declaramos operadores
function operar(operador) {
    operacion += operador;
    document.getElementById("pantalla").innerText = " ";
    document.getElementById("pantalla").innerText = operacion;
}
// declaramos entrada desde botones
function ingresar(valor) {
    if (resultado) {
        operacion = valor;
        resultado = false;
    }
    else { operacion += valor; }

    document.getElementById("pantalla").innerText = operacion;
}
// declaramos funcion para el calculo
function calcular() {
    try {
        operacion = eval(operacion);
        document.getElementById("pantalla").innerText = operacion;
        resultado = true;
        document.getElementById("pantalla").style.color="green";
    } catch (e) {
        document.getElementById("pantalla").innerText = "Error";
    }
}