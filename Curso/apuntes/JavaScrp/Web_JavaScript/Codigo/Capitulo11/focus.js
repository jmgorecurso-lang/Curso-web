const reproductorAudio  = document.querySelector("audio");
let audioPausado = true;

window.addEventListener("blur", function(){
  audioPausado = reproductorAudio.paused;
  reproductorAudio.pause();
});

window.addEventListener("focus", function(){
  if (!audioPausado) reproductorAudio.play();
});

