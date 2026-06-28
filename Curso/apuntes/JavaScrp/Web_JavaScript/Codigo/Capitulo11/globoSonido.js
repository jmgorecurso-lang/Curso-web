const intervalo = 10;
const anchoInicial = 100, anchoFinal = 250;
let ancho = anchoInicial;
const incremento = 1;
let idTemporizador;

const globo = document.querySelector("img");
const explosion = document.querySelector("audio");

globo.addEventListener("click", function(){
    idTemporizador = setInterval(hinchaGlobo, intervalo);
});

function hinchaGlobo(){
    ancho += incremento;
    document.getElementById("globo").width = ancho;
    if(ancho >= anchoFinal){
        document.getElementById("globo").src = "../Imagenes/explosion.png";
        explosion.play();
        clearInterval(idTemporizador);
    }
}
