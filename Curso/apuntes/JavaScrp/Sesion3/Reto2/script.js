// RETO 2: EXERCISES 2 ----- JAVASCRIPT -----
/*


//////////////////////////////////////////////////////////
//1. Comparar 3 números y saber el mayor el menor o si son iguales (IF ELSE)
/*console.clear();
let num1;
let num2;
let num3;
// comprobamos
while (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Error debes poner un numero");
    num1=parseFloat (prompt("Introduce un numero: "));
    num2=parseFloat (prompt("Introduce un numero: "));
    num3=parseFloat (prompt("Introduce un numero: "));
}
if (num1 === num2 && num2 === num3){
    alert("Los tres numeros son iguales");
}else if (num1 > num2 && num1 > num3){
    alert (`Num1, ${num1}, es el mayor de todos`);
}else if (num2 > num1 && num2>num3){
    alert (`Num2, ${num2}, es el mayor de todos`);
}else{
    alert (`Num3, ${num3}, es el mayor de todos`);
}if (num1< num2 && num1<num3){
  alert (`Num1, ${num1}, es el menor de todos`);
}else if (num2 < num1 && num2<num3){
    alert (`Num2, ${num2}, es el menor de todos`);
}else{
    alert (`Num3, ${num3}, es el menor de todos`);
}

//2. Debe ingresar y validar solo los números del 1 al 100
console.clear();
let numval=parseFloat (prompt("Pon un numero del 1 al 100: "));
while (isNaN(numval)){
    alert("Debes introducir un numer0");
    break;
}if (numval<=100 && numval>=0){
    alert("Mu bien");
}else{
    alert("Del 1 al 100 ceporro");
}
//
// 3. Comprobar si la edad ingresada “es mayor” o “menor de edad”; consistencia de tal
manera que no permita avanzar hasta que no ingrese un dato numérico (while)
console.clear();
let edad = parseInt (prompt("Introduce tu edad: "));
while (isNaN(edad)){
    alert("Introduce un numero para tu edad: ");
    //volvemos a preguntar para no entrar en bucle
    edad = parseInt (prompt("Introduce tu edad: "));
}if (edad >=18){
    alert(`Bien tu edad es de ${edad} años, eres mayor de edad`);
}else{
    alert (`Bien tu edad es de ${edad} años, eres menor de edad`);

}
/////
// 4. Mostrar mensaje para las notas de los estudiantes (IF ELSE)
Notas del 0 al 10
Si nota < 5: Insuficiente (IN) Si nota >= 5 y < 6: Suficiente (SU) Si nota >= 6 y < 7: Bien (BI)
Si nota >= 7 y < 9: Notable (NT) Si nota >= 9 y <= 10: Sobresaliente (SB) Si nota es menor que 0 o mayor que 10: Nota inválida

console.clear();
let nota = parseFloat (prompt("Introduce tu nota: "));
while (isNaN(nota)){
    alert("Introduce un numero para tu nota: ");
    //volvemos a preguntar para no entrar en bucle
    nota = parseFloat (prompt("Introduce tu nota: "));
}if (nota <5){
    alert(`Mal, tu nota ${nota} es un Insufuciente`);
}else if (nota >=5 && nota<6){
    alert (`Bien tu nota ${nota} es un Sufuciente`);
}else if (nota >=6 && nota<7){
    alert (`Bien tu nota ${nota} es un Bien`);
}else if (nota >=7 && nota<9){
    alert (`Muy Bien tu nota ${nota} es un Notable`);
}else if (nota >=9 && nota<=10){
    alert (`Genial tu nota ${nota} es un Sobresaliente`);
}else{
    alert (`La nota que has puesto no es valida`);
}

//5. Los días de la semana del 1 al 7 (1 . lunes … 2. Martes… 3. Miércoles….) (SWITCH)
let dia=parseInt(prompt("pon el numero de dia de la semana: "));
while (isNaN(dia)){
    alert ("Un numero, melón");
    dia=parseInt(prompt("pon el numero de dia de la semana: "));
}
switch (dia){
    case 1 :
        alert("Es lunes");
        break;
    case 2:
        alert("Es martes");
        break;
    case 3:
            alert("Es miercoles");
            break;
    case 4:
            alert("Es jueves");
            break;
    case 5:
            alert("Es viernes");
                break;
    case 6:
            alert("Es Sabado");
                break;
    case 7:
             alert("Es Domingo");
                    break;
    default:
        alert("Valor incorrecto");
        break;

}


//6. Estaciones del año según el mes…. (diciembre, enero, febrero…. Invierno (SWITCH)
let mes = (prompt("introduce un mes para saber en que estación está:").toLowerCase());
switch (mes){
    case 'enero ':
    case 'diciembre':
    case'febrero':
        alert("Es Invierno");
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        alert("Es Primavera");
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        alert ("Es verano");
        break;
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        alert("Es Otoño");
        break;
    default:
        alert("mi no entender");
        break;
}
//----------------------------------------
// 7. Elección de animales según su hábitat (SWITCH/CASE anidado)
    1. Terrestre ----- león, elefante, jirafa
    2. Acuáticos----- delfín, tiburón, pulpo
    3. Aéreos--------- águila, colibrí, murciélago
    Elegir primero el tipo de hábitat y luego el animal; al elegir el animal que de
    mensaje ponga alguna información interesante del animal seleccionado.
*/
let animal;
let continuar = true;
while (continuar){
let habitat = parseInt(prompt("Elije un habitat: 1. Terrestre  2. Acuáticos 3. Aéreos:"));
while (isNaN(habitat) || habitat>3) {//mientras sea numero o menor 3
    alert("LEEE 1, 2 o 3");
    habitat = parseInt(prompt("Elije un habitat: 1. Terrestre  2. Acuáticos 3. Aéreos:"));
}
switch (habitat) {
    case 1: animal=prompt("Elije entre leon, elefante o jirafa").toLowerCase().trim();//con trim elimina espacios
        switch (animal) {
            case 'leon':
                alert("El rey de la selva, vive en la sabana africana");
                break;
            case 'elefante':
                alert("Los elefantes son los animales terrestres más grandes que existen en la actualidad.");
                break;
            case 'jirafa':
                alert("La jirafa  es un mamífero artiodáctilo, de la familia Giraffidae propio de África. Es la más alta de todas las especies");
                break;
            default:
                alert("Especie no reconocida");
                break;
        }
        break;
    case 2: animal=prompt("Elije entre delfin, tiburon o pulpo").toLowerCase().trim();
        switch (animal) {
            case 'delfin':
                alert("Los delfines son un tipo de mamíferos cetáceos pertenecientes a la familia Delphinidae. Pueden vivir más de 30 años en cautividad y tienen una longitud de 3,5 m");
                break;
            case 'tiburon':
                alert("Los tiburones, también llamados escualos, pertenecen al orden de los selacimorfos y llegaron a convivir con los dinosaurios. Es un superdepredador");
                break;
            case 'pulpo':
                alert("son animales marinos de la familia de los moluscos cefalópodos que carecen de esqueleto: ni interno ni externo. Considerado el más inteligente de todos los invertebrados,De él sabemos que tiene tres corazones, un cerebro. ");
                break;
                default:
                    alert("Especie no reconocida");
                    break;
        }
        break;
    case 3: animal=prompt("Elije entre águila, colibrí, murciélago").toLowerCase().trim();
        switch (animal) {
            case 'aguila':
                alert("Depredadores por excelencia estos pájaros son temibles aves de presa. Cuentan con un pico fuerte y robusto acabado en punta y hacia abajo que les facilita la ..");
                break;
            case 'colibri':
                alert("Los colibríes pertenecen al orden de los Apodiformes y a la familia Trochilidae. Son aves que se caracterizan por su pequeño tamaño , van desde los 5 cm hasta los 20 cm. Existen alrededor de 330 especies de colibríes y viven solamente en América.");
                break;
            case 'muercielago':
                alert("Un murciélago es un animal mamífero que pertenece a la orden de los quirópteros. Estos seres de hábitos nocturnos son alados y cuentan con la particularidad de ...");
                break;
                default:
                    alert("Especie no reconocida");
                    break;
        }
        break;
}continuar = confirm("Desea continuar con mas animales?");
}
/*
    8. Calculadora de Operaciones básicas ( + - * / ) (SWITCH)
    Que usuario ingrese dos números y luego el operador
    El mensaje mostrará el resultado de esa operación.

   /*
let num1;
let num2;
let operacion;
let resultado;
num1 = parseInt(prompt("1)Introduce un numero"));
if (isNaN(num1)) {
    alert("Debes introducir un numero");
    num1 = parseInt(prompt("1)Introduce un numero"));
}
num2 = parseInt(prompt("2)Introduce un numero"));
while (isNaN(num2)) {
    alert("Debes introducir un numero");
    num2 = parseInt(prompt("2)Introduce un numero"));
}
operacion = prompt("Elije la operacion + - * /");
switch (operacion) {
    case '+':
        resultado = num1 + num2;
        alert(`El resultado de la suma es ${resultado}`);
        break;
    case '-':
        resultado = num1 - num2;
        alert(`El resultado de la resta es ${resultado}`);
        break;
    case '*':
        resultado = num1 * num2;
        alert(`El resultado de la multiplicacion es ${resultado}`);
        break;
    case '/':
        resultado = num1 / num2;
        alert(`El resultado de la division es ${resultado}`);
        break;
    default:
        alert("Eleccion incorrecta");
        break;
}*/
/*
    9. Muestra todos los números pares hasta un número ingresado desde input(prompt)
    (utilizar FOR)
    let numero;
    let contador;
    numero = parseInt (prompt("Introduce un numero: "));
    while (isNaN(numero)){
        alert("Un numero");
        numero = parseInt (prompt("Introduce un numero: "));
    }
// le decimos que iniciamos la variable contador, y que si contador no es igual que el numero introducido sume uno a contador y haga la comprobacion de si ese numero es par, si lo es aparece en consola si no, vuelve al for hasta que se cumpla la condicion
    for (let contador=1;contador <= numero; contador ++){
        if (contador%2 ===0){
            console.log(contador);
        }
    }

*/