// Funcion que s ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded",function(){
    //obtener todas las miniaturas
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.getElementById("mainImage");


    //Establece la primera miniatura como activa
    if (thumbnails.length >0){
        thumbnails[0].classList.add('activa');
    }
    //agregar evento mouseOver a cada miniatura con for
    thumbnails.forEach (function(thumbnail){
        thumbnail.addEventListener('mouseover',function(){
            //obtenemos la url de la imagen grande desde el atributo data-full
            const newSrc = this.getAttribute ('data-full');
            //Cambiar la imagen principal
            mainImage.setAttribute ('src',newSrc);
            // Actualizar la clase active
            thumbnails.forEach(function(thumb){
                thumb.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});