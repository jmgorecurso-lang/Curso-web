const texto = "🚀 Aprendiendo a manipular clases con JavaScript";
document.title = "Modo Noche | Classlist";
document.querySelector("h2").innerHTML = texto;

// Agregamos imagen de usuario
const imgUsuarioHTML = "<img src='https://images.unsplash.com/photo-1584801098424-3104223b0514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRlc3BlcnRhcnxlbnwwfDF8MHx8fDA%3D'heigth='200px' >";
document.querySelector(".imgUsuario").innerHTML = imgUsuarioHTML;
//imagen modo noche



//modo noche Usando Classlist add y remove
const modoNocheCheckbox = document.getElementById("modoNoche");
const bodyElement = document.body;

// funcion para activar modo noche
function activarModoNoche(){
    bodyElement.classList.add("modo-noche");
    //localstorage para guardar las preferencias del usuario
    //setitem recibe dos parametros clave (key)y el valor (value) que queremos guardar
    const imgUsuarioDormir = "<img src='https://images.unsplash.com/photo-1519003300449-424ad0405076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9ybWlkb3xlbnwwfDF8MHx8fDA%3D'>";
    document.querySelector(".imgUsuario").innerHTML = imgUsuarioDormir;

    localStorage.setItem ("modoNoche","activado");
}
// funcion para desactivar modo noche
function desactivarModoNoche(){
    bodyElement.classList.remove("modo-noche");
    const imgUsuarioHTML = "<img src='https://images.unsplash.com/photo-1584801098424-3104223b0514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRlc3BlcnRhcnxlbnwwfDF8MHx8fDA%3D'heigth='200px' >";
document.querySelector(".imgUsuario").innerHTML = imgUsuarioHTML;
    localStorage.setItem ("modoNoche","desactivado");
}

//Evento change del checkbox
modoNocheCheckbox.addEventListener("change",function(event){
    //target es la referencia del elemento (checkbox)
    if(event.target.checked){
        activarModoNoche();

    }else{
        desactivarModoNoche();
    }
});
// Cargar preferencias guardada en localStorage
//getItem recibe la clave (key) y devuelve el value guardado
const modoGuardado = localStorage.getItem("modoNoche");
if (modoGuardado==='activado'){
    activarModoNoche();
modoNocheCheckbox.checked = true;
}else if (
    modoGuardado ==='desactivado'){
        desactivarModoNoche();
        modoNocheCheckbox.checked = false;
    }


