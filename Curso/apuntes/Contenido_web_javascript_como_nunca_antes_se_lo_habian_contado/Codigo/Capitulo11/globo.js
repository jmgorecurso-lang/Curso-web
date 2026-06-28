const intervalo = 10;
const anchoInicial = 100, anchoFinal = 250;
let ancho = anchoInicial;
const incremento = 1;

const globo = document.querySelector("img");

let id = setInterval(hinchaGlobo, intervalo);

function hinchaGlobo(){
    ancho += incremento;
    globo.width = ancho;
    if(ancho >= anchoFinal){
       globo.src = "../Imagenes/explosion.png";
        clearInterval(id);
    }
}
