document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        once: false    // Permite que la animación se repita
    });

    document.querySelectorAll('.thumbnail-item').forEach(item => {
        const thumbnailUrl = item.getAttribute('data-thumbnail');
        const name = item.getAttribute('data-name');
        const price = item.getAttribute('data-price');

        // Crear y agregar la imagen
        const img = document.createElement('img');
        img.src = thumbnailUrl;
        img.alt = name;
        item.appendChild(img);

        // Crear y agregar el div de la informacion del hover
        const infoDiv = document.createElement('div');
        infoDiv.className = 'thumbnail-info';
        infoDiv.innerHTML = `<div class="thumbnail-name">${name}</div> <div class="thumbnail-price">${price}</div>`;
        item.appendChild(infoDiv);
    });

    const mainImage = document.getElementById('mainImage');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const currentName = document.getElementById('currentName');
    const currentPrice = document.getElementById('currentPrice');
    let currentIndex = 0;

    // FUNCIÓN OPTIMIZADA PARA ANIMAR CON AOS
    function triggerAosAnimation(effect) {
        // Quita la clase de animación previa para reiniciar el estado
        mainImage.classList.remove('aos-animate');

        // Asigna el nuevo efecto de flip (ej: flip-left o flip-right)
        mainImage.setAttribute('data-aos', effect);

        // Requiere un pequeño delay para que el DOM procese el cambio y reinicie la animación
        setTimeout(() => {
            mainImage.classList.add('aos-animate');
            AOS.refreshHard(); // Fuerza a AOS a escanear los nuevos atributos
        }, 350);
    }

    // Funcion para actualizar la imagen
    function updateImage(index, effect = 'flip-left') {
        const item = thumbnails[index];
        const fullsize = item.getAttribute('data-full');
        const name = item.getAttribute('data-name');
        const price = item.getAttribute('data-price');

        // Actualizamos imagen y texto
        mainImage.setAttribute('src', fullsize);
        currentName.textContent = name;
        currentPrice.textContent = price;

        // Actualizamos clase active en las miniaturas
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove('active');
        });
        item.classList.add('active');

        // Lanza el efecto visual
        triggerAosAnimation(effect);
    }

    // Evento para el boton siguiente
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateImage(currentIndex, 'flip-left');
        });
    }

    // Evento para el boton anterior
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            updateImage(currentIndex, 'flip-right');
        });
    }

    // Teclado, flechas derecha e izquierda
    document.addEventListener("keydown", function (event) {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateImage(currentIndex, 'flip-left');
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            updateImage(currentIndex, 'flip-right');
        }
    });

    // Mostrar informacion al pasar el mouse (hover)
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('mouseover', function () {
            currentIndex = index; // Actualiza el índice actual
            updateImage(index, 'flip-left');
        });
    });

    // Inicia primera imagen sin animación brusca si lo deseas
    updateImage(0, 'flip-left');
});