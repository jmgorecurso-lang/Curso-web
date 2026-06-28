/*
document.getElementById('sumar').addEventListener('click', function (){
    //obtenemos valores y los pasamos a numeros
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);

    // validamos si son numeros
    if (isNaN(n1) || isNaN(n2)) {
        alert ("Pon un numero melón");
        return;
    }
    // hacemos la sumar
    let suma= n1+n2;

    // mostramos resultado
    document.getElementById('resultado').innerText = suma;
}
);
// Hacemos una resta
document.getElementById('restar').addEventListener('click',function(){
    let n3= parseFloat(document.getElementById('num3').value);
    let n4= parseFloat(document.getElementById('num4').value);

    if (isNaN(n3) || isNaN(n4)) {
        alert ("Pon un numero");
        return;
        let resta = n3-n4;
        document.getElementById('restas').innerText = resta;
    }
})
// ejercicio Area
let lado=40;
let altura=40;
// calculamos area
let area = lado * altura;
let perimetro = lado * 4;
console.log(`El resultado del area es ${area}`);
console.log(`El resultado del perimetro es${perimetro}`);
*/
//ejercicio 3 Calculo de media
let num1 = parseInt (prompt("Introduce un numero: "));
let num2 = parseInt (prompt("Introduce otro numero: "));
let num3 = parseInt (prompt("Introduce el ultimo numero: "));
let media = num1+num2+num3 / 3;
console.log(`La media de los numeros introducidoe es ${media}.`);