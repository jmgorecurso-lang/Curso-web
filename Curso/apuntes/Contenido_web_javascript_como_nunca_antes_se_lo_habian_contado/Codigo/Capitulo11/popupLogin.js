function accesoAreaPrivada(){
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;
    if(validarUsuario(usuario, password)){
        window.open("paginaPrivada.html");
        window.close();
    }
}

function cerrarPopup(){
    window.close();
}

function validarUsuario(usuario, password){
    return true;
}