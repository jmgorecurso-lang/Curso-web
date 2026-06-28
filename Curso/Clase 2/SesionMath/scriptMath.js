/*
// Ejemplo de Math.random entre 0 y 1
console.log("Numero aleatorio entre 0 y 1: ",Math.random());

//Ejemplo con Math.floor()
console.log("Redondeo hacia abajo de 3.7:",Math.floor(3.7));

//Ejemplo con Math.round()
console.log("Redondeo mas cercano de 3.7:",Math.round(3.7));
console.log("Redondeo mas cercano de 3.5:",Math.round(3.4));

//Ejemplo con Math.ceil()
console.log("Redondeo hacia arriba de 8.2:",Math.ceil(8.2));

//ejemplo practico, generar un numero random del 1 al 10
const randomNumber = Math.floor(Math.random() * 10);
console.log("Número aleatorio entre 1 y 10:", randomNumber);

// otro ejemplo Redondear
const num = 3.75;
console.log("Numero redondeado",Math.round (num));
console.log("Numero redondeado a dos decimales:",num.toFixed(2));
*/
// Arrays con 5 imagenes para el ejercicio
const imagenes = [
    "https://picsum.photos/id/50/300/300",
    "https://picsum.photos/id/20/300/300",
    "https://picsum.photos/id/10/300/300",
    "https://picsum.photos/id/30/300/300",
    "https://picsum.photos/id/155/300/300",
    "https://picsum.photos/id/525/300/300",
    "https://picsum.photos/id/72/300/300",
];
// funcion para cambiar imagen
function cambiarImagen(){
    const indiceAleatorio = Math.floor(Math.random ()* imagenes.length);
    document.getElementById('imagen').src=imagenes[indiceAleatorio];
    
    }
//Mostrar primera imagen al cargar
cambiarImagen();

// funcion parrafo
function estilo(){
    document.querySelector("p").classList.add("parrafo");
}
