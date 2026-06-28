const listaPaises = ["España", "Portugal", "Francia", "Italia"];

const menu = document.querySelector("select");
const campoNombre = document.getElementById("nombre");
const campoEdad = document.getElementById("edad");
const  boton = document.querySelector("button");
const campoError = document.getElementById("error");

for(let x = 0; x < listaPaises.length; x++){
   let pais = listaPaises[x];
   const opcion = document.createElement("option");
   opcion.value = pais;
   const textoOpcion = document.createTextNode(pais);
   opcion.appendChild(textoOpcion);
   menu.appendChild(opcion);
}

boton.addEventListener("click", function(evento){
   evento.preventDefault();
   let textoError = "";
   if(!campoNombre.checkValidity()){
      campoNombre.style.backgroundColor = "lightcoral";
      textoError = campoNombre.validationMessage;
   }
   else if(!campoEdad.checkValidity()) {
      campoEdad.style.backgroundColor = "lightcoral";
      textoError = campoEdad.validationMessage;
   }
      else  textoError = "Gracias por su información";
   campoError.innerHTML = textoError;
})

campoNombre.addEventListener("click", function(){
   campoNombre.style.backgroundColor = "initial";
})
campoEdad.addEventListener("click", function(){
   campoEdad.style.backgroundColor = "initial";
})
