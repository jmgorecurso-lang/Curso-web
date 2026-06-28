// ejercicio 1
const edad=20;
let dinero=20;
const entrada=12;

if(edad<18){
    alert("Puedes entrar")
}else{
    if(dinero>=entrada){
        let cambio=dinero-entrada;
        alert(`tu cambio es de ${cambio} Euros`);
    }else{
        alert ("el precio de la entrada es de 12 euros, ahorra")
    }
}