function myFunction(){
    let nameInput = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;
    let mensage;
    let nameRegex =/^[a-zA-Z]+$/;

    //1. Validamos que Ninguno esté vacio
    if (ageInput===""||nameInput===""){
        mensage ="Por favor, escribe todos los campos";
    }
    //2. Validamos si el nombre NO es un texto con isNan
    else if (!isNaN(nameInput)){
        mensage="El nombre debe ser texto";
    }

    //3.Validamos si el nombre NO es un texto con regex
    else if (!nameRegex.test(nameInput)){
        mensage="El nombre solo puede tener texto y espacio";
    }

    //4. Validamos si la edad NO es un número
    else if (isNaN(ageInput)) {
        mensage = "La edad solo debe ser numeros";
    }
    //5. Si todo está bien hacemos la comparacion
    else {
        let age = Number(ageInput); //Convertimos a numero para comparar
        mensage = (age < 18) ?"Demasiado Joven":"Suficientemente mayor"; // Operador ternario para la comparacion
    }
    document.getElementById("msg").innerHTML = mensage;
}
function resetInputs(){
    document.getElementById("name").value ="";
    document.getElementById("age").value ="";
    document.getElementById("msg").innerHTML ="";
    document.getElementById("name").focus();
}
// Ejemplo de funcion maematica sin / con parametros argumentos y return
function suma (){
    return 6 + 4;
}
console.log ("suma sin argumentos",suma());

function calculaArea (base, altura){
    return base * altura;
}
console.log ("Area de un rectangulo de base 5 y altura 3 =",calculaArea(5,3));
// function arrow sin parametros
const saludo =()=> "Hola Welcome a JavaScript!!";
console.log (saludo());

//Ejemplo de funcion arrow con parametros y argumentos
const sumar = (a,b) => a+b;
console.log ("suma de 10 + 2 = ",sumar (10,2));

//funcion para saludar con nombre
function saludar (nombre) {
    alert("Hola, "+nombre+ " Bienvenido a la sesion de JS");
}

//activar elementos
const checkbox = document.getElementById("activar-form");
const cajaTexto = document.getElementById ("caja-texto");
const btnEnviar = document.getElementById ("btn-enviar");
cajaTexto.style.display="none";
btnEnviar.style.display="none";

checkbox.addEventListener("change",
    function (){
        if (this.checked){
            cajaTexto.style.display ="block";
            btnEnviar.style.display = "inline-block";
            cajaTexto.focus ();
                    }else{
                        cajaTexto.style.display ="none";
                        cajaTexto.value = ""; //limpia texto
                    }
    }
);
function inicio(){
    document.getElementsByClassName(.cambio);
}
btnEnviar.addEventListener ("click",
    function (){
        if (cajaTexto.value ===""){
            alert("Escribe tu comentario...");
            cajaTexto.focus();
        }else{
            alert ("Tu comentario es:"+cajaTexto.value + "\nGracias por escribirnos");
            inicio();
        }
    }
)