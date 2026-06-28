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