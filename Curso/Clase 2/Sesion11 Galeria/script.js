// Funcion que s ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    //obtener todas las miniaturas
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.getElementById("mainImage");//imagen que se muestra
    const imageTitle = document.getElementById("imageTitle");
    const imageDescription = document.getElementById("imageDescription");

    function updateGallery(thumbnail) {
        // obtenemos todos los datos delatributo data
        const newSrc = thumbnail.getAttribute('data-full');
        const title = thumbnail.getAttribute('data-title');
        const description = thumbnail.getAttribute('data-description');
        // efecto transicion para imagen principal
        mainImage.style.opacity = '0.5';
        setTimeout(() => {
            mainImage.setAttribute('src', newSrc);
            mainImage.style.opacity = '1';
        }, 150);
        //actualizar titulo y descripcion
        imageTitle.textContent = title;
        imageDescription.textContent = description;
        //actualizar la clase active en las miniaturas
        thumbnails.forEach(thumb => {
            thumb.classList.remove('active');
        });
        thumbnail.classList.add('active');
    }
    //Establece la primera miniatura como activa
    if (thumbnails.length > 0) {
        updateGallery(thumbnails[0]);
    }
    //agregar evento mouseOver a cada miniatura con for
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('mouseover', function() {
            updateGallery(this);
        });
     });
});
