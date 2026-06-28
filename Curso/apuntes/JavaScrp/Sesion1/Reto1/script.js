// REto 1
//1 Par o impar
/*
let ejerc1 = parseInt (prompt("Ingresa un numero"));
let par = ejerc1 % 2;
if (par==0){
    console.log("El numero es par");
}else{
    console.log ("El numero es impar");
}
*/
// 2 Según el número ingresado, comprueba el género
/*
let ejerc2 = prompt("Ingresa el numero de tu genero (0,1 o 2):");
if (ejerc2==1){
    console.log(`Tu numero ingresado es el ${ejerc2},eres Hombre`);
}else if (ejerc2==2){
     console.log(`Tu numero ingresado es el ${ejerc2},eres Mujer`);
}else if (ejerc2==0){
     console.log(`Tu numero ingresado es el ${ejerc2},eres No Definido`);
}else {
    console.log("Incorrecto ");
}
*/
// 3 MÚLTIPLO DE 5 (INGRESA UN NÚMERO Y COMPROBAR SI ES MÚLTIPO DE 5)
/*
let ejerc3 = parseInt (prompt("ingresa un numero para ver si es multiplo de 5:"));
let multiplo = ejerc3 % 5;

if (multiplo==0){
    console.log(`Perfecto el número ${ejerc3} es un multiplo de 5`);
}else {
    console.log(`NO, el número ${ejerc3} no es un multiplo de 5`);
}
//4 ESTADO_CIVIL Según el número que ingrese que te diga el estado civil
/*1. SOLTERO/A
2. CASADO/A
3. DIVORCIADO/A
4. VIUDO/A

let ejerc4 = prompt("Ingresa el numero para ver tu estado civil  (del 1 al 4):");
if (ejerc4==1){
    console.log(`Tu numero ingresado es el ${ejerc4},estas Solter@`);
}else if (ejerc4==2){
     console.log(`Tu numero ingresado es el ${ejerc4},estas Casad@`);
}else if (ejerc4==3){
     console.log(`Tu numero ingresado es el ${ejerc4},estas Divorciad@`);

}else if (ejerc4==4){
     console.log(`Tu numero ingresado es el ${ejerc4},estas Viud@`);
}else {
    console.log("No estas ");
}
*/

//5 Login Solicitar usuario y contraseña y dar acceso;
/* USUARIO: admin - CONTRASEÑA: 1234@
MENSAJE - "Bienvenido administrador, acceso total"

let user = prompt ("Pon tu usuario: ");
let passw = prompt ("Ahora la contraseña: ")

if (user==="admin" && passw==="1234@"){
    console.log ("Bienvenido administrador, acceso total");
}else {
    window.alert("Acceso Incorrecto, esto va a explotar !!!");
}
    */
//6 Tienda Online
/*Ingresa el número y devuelva el precio del artículo
1. CAMISA PRECIO: 20
2. PANTALON PRECIO: 30
3. ZAPATOS PRECIO: 50

const tienda =[
    {Articulo:"Camisa",Precio:"20€"},
    {Articulo:"Pantalon",Precio:"30€"},
    {Articulo:"Zapatos",Precio:"50€"},]
let cosa = parseInt (prompt("Ingresa el numero de articulo para ver su precio (1/3):"));
if (cosa ===1){
    console.log(tienda[0].Precio);
}else if (cosa ===2){
    console.log(tienda[1].Precio);
}else if (cosa===3){
     console.log(tienda[2].Precio);
}else {
    console.log ("Articulo Incorrecto")
}
    */



//7 Saludo
/*Según la hora que ingreses; el mensaje será:
"BUENOS DÍAS"
"BUENAS TARDES"
"BUENAS NOCHES*/

let nombre = prompt ("Cual es tu nombre?;");
let hora = parseInt(prompt("Que hora es? (formato 24h): "));
if (hora >=6 && hora<=12){
    console.log (`Hola ${nombre}, Buenos dias`);
}else if (hora >=13 && hora<=22){
    console.log (`Hola ${nombre}, Buenas tardes`);
}else {
    console.log (`Hola ${nombre}, Buenas Noches`);
}
