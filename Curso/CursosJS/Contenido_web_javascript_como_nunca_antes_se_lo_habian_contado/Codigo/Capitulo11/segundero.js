const intervalo = 1000;
let segundos = 0;


setInterval(incrementaSegundos, intervalo);

function incrementaSegundos(){
    segundos++;
    document.getElementById("segundero").innerHTML = segundos;
}






  