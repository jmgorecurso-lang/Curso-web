const imagenes = [
    "https://picsum.photos/id/12/350/350",
    "https://picsum.photos/id/22/350/350",
    "https://picsum.photos/id/32/350/350",
    "https://picsum.photos/id/42/350/350",
    "https://picsum.photos/id/52/350/350",
    "https://picsum.photos/id/72/350/350",
];
const frases = [
    {texto: "Si pensarlo te parece una locura, no estabas lo suficiente loco como para pensarlo.", autor:"The Punisher"},
    {texto: " Felicidades. Todavía estás vivo. La mayoría de la gente es tan desagradecida de estar viva. Pero no tú. Ya no." , autor:"Jigsaw"},
    {texto: "No necesito volverme loco, ya lo estoy.", autor: "Richard Ramirez"},
    {texto: "La gente, en su estado de máxima desesperación, son capaces de devorarse unos a otros. Yo solo mostré la locura de su moralidad", autor: "Joker"},
    {texto: "Lo bueno y lo malo son una cuestión de perspectiva",autor:"Anonimo" },
    {texto: "Tanta gente para matar ... tan poco tiempo.",autor:"Anonimo"}
];
function cambiarImagen(){

    //Paso 1: Generar numero aleatorio enre 0 y 1
    const random = Math.random();
    //PASO 2: Multiplicar por la longitud del array (5)
    const multiplicado = random * imagenes.length; //imagenes es el array
    //Paso 3: Redondear hacia abajo con Math.floor
    const indiceAleatorio = Math.floor(multiplicado);
    //Paso 4: Usar el indice para seleccionar la imagen
   const imagenSeleccionada = imagenes [indiceAleatorio];
    //Paso 5: Cambiar el src de la imagen en el HTML
    const imgElement = document.getElementById('imagen');
    imgElement.src = imagenSeleccionada;

      //Añadir animación sin timeout no se aprecia la animacion
    imgElement.classList.add('lado');
    setTimeout(()=> imgElement.classList.remove('lado'),500);
    //document.querySelector('imagen').classList.add("cambio");

}
cambiarImagen();

function cambiarFrase(){
    //En una sola frase
    const indiceAleatorio = Math.floor(Math.random()*frases.length);
    //obtenemos frase seleccionada
    const fraseSeleccionada = frases [indiceAleatorio];
    //mostramos en el html
    const fraseElement = document.getElementById('frase');
    fraseElement.innerHTML = `${fraseSeleccionada.texto} <div class="autor"> - ${fraseSeleccionada.autor} -</div>`;

     //Añadir animación sin timeout no se aprecia la animacion
    fraseElement.classList.add('fraseEfecto');
    setTimeout(()=> fraseElement.classList.remove('fraseEfecto'),500);

}
cambiarFrase();

function cambiarAmbos() {
    cambiarImagen();
    cambiarFrase();

}
//setInterval(cambiarFrase,5000); //hacemos que se cambie la frase pasado un tiempo