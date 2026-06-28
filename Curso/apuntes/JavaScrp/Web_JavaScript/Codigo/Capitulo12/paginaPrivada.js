window.addEventListener("load", function (){
    const usuario = window.sessionStorage.getItem("usuario");
    document.querySelector("span").innerHTML = usuario;
})

function abrirPaginaAcceso() {
    if (window.confirm("¿Desea realmente cerrar la sesión?"))
        window.close();
}