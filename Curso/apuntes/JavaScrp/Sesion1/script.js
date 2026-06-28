// declaramos variables
let x= 10;
let y = 4;
let suma = y + x;
let resta = x - y;
let caos = suma + y;

console.log(x);
console.log(suma);
console.log(resta);
console.log(caos);

const pi = 3.14;
console.log(pi);
const total = pi*suma+y**3;
console.log(total);

let nombre = "casa";
let prueba = nombre + pi;
console.log(prueba);

let coches =["Seat","Fiat","Mazda","Lambo"];
console.table(coches);
console.log(coches[2]);
// colecciones

const grupo =[
    {nombre:"Paco",cargo: "Jefe"},
    {nombre:"Juan",cargo: "Machaca"},
    {nombre:"Maria",cargo:"Jefa"}
]
console.table(grupo);
console.table(grupo[1].nombre);


let divide = 9 / 2;
let resto = 9 % 2;
console.log(divide);
console.log (resto);

//operadores de asignacion e igualdad

let stock=2000;

if (stock ==2000) {
    console.log("Esto es correcto");
}else{
    window.alert("Is not true, el valor es "+stock);
}
// if's anidados
let nivel = parseInt (prompt ("Ingresa un numero, del 1 al 3: "));

if (nivel===1){
    window.alert("Nivel Básico, tu nivel es "+nivel);
}else if (nivel===2){
    window.alert("Nivel Intermedio, tu nivel es "+nivel);
}else if (nivel===3){
    window.alert("Nivel avanzado, tu nivel es "+nivel);
}else{
    window.alert("Ingreso invalido");
}
// suma
// let num1 = parseInt(prompt("Ingresa un numero: "));
// let num2 = parseInt(prompt("Ingresa un numero: "));
// let resultado = num1 + num2;
// window.alert("El resultado de la suma es "+resultado);

// operacion
/*
let n1 = parseInt(prompt ("Ingresa un numero: "));
let n2 = parseInt(prompt ("Ingresa un numero: "));
let opera = prompt("pon el signo de la operacion: ");
let sum=n1+n2;
let rest=n1-n2;
let mult=n1*n2;
let divid=n1/n2;
if (opera== "+"){
    console.log("El resultado de la suma es "+sum);
}else if (opera=="-"){
    console.log("El resultado de la resta es: "+rest);
}else if (opera=="x"){
    console.log("El resultado de la multiplicacion es: "+mult);
}else if (opera=="/"){
    console.log("El resultado de la division es: "+divid);
}else{
     window.alert("Ingreso invalido");
}
*/
//ayuda piso /Comprobacion de varios valores
/*
let edadUsuario = 20;
let resiUsuarioCat = true;
if (edadUsuario >=18 && resiUsuarioCat){
    window.alert ("Estas aceptado");
}else {
    window.alert ("Te quedas fuera");
}
*/
// uno de los dos el || equivale al or
/*
let edadUsuario = 40;
let resiUsuarioCat = true;
if (edadUsuario >=18 && edadUsuario<=35 && resiUsuarioCat){
    window.alert ("Estas aceptado");
}else {
    console.log(`${resiUsuarioCat} no obtienes nada, tu edad es;${edadUsuario}`);
}
    */
// Reto disco
/*Comprobar si es mayor de edad
mensaje si es mayo: "Entras"
De lo contrario "PA tu casa "*/

let age = parseInt(prompt("Cuantos años tienes: "));
if (age<=17){
    console.log(`Tira pa tu casa, no entras por tener ${age} años`);
}else {
    console.log(`Entras, entras por tener ${age} años`);
}