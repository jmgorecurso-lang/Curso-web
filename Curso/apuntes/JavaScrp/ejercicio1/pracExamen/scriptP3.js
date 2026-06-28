 // 1. Datos de los productos (Imágenes, Textos y Colores de fondo de tu mockup)
        const products = [
            {
                img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emFwYXRpbGxhcyUyMG5pa2V8ZW58MHx8MHx8fDA%3D",
                title: "Nike Air Max Pulse",
                desc: "Diseño futurista con amortiguación reactiva. Tecnología Air Max en la suela para máxima comodidad.",
                price: "$189.99",
                bg: "radial-gradient(circle, #ff3333, #880000)"
            },
            {
                img: "https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHphcGF0aWxsYXMlMjBuaWtlfGVufDB8MHwyfHx8MA%3D%3D",
                title: "Nike Zoom Green",
                desc: "Ligereza inigualable enfocada al running de alta velocidad con respuesta elástica óptima.",
                price: "$145.00",
                bg: " #0c0c0c"
            },
            {
                img: "https://images.unsplash.com/photo-1738959142460-ee534d386878?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHphcGF0aWxsYXMlMjBuZXclMjBiYWxhbmNlfGVufDB8MHwwfHx8MA%3D%3D",
                title: "New Balance Classic v5",
                desc: "Estilo urbano atemporal con soporte de gamuza premium para el día a día.",
                price: "$160.00",
                bg: "radial-gradient(circle, #6b7280, #1f2937)"
            },
            {
                img: "https://static.chollometro.com/threads/raw/f20l5/1841765_1/re/300x300/qt/60/1841765_1.jpg",
                title: "Adidas Retro Sport",
                desc: "Silueta limpia de cuero minimalista perfecta para cualquier outfit casual.",
                price: "$110.00",
                bg: "radial-gradient(circle, #fdba74, #7c2d12)"
            },
            {
                img: "https://images.unsplash.com/photo-1718220095476-7916e897fc55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHphcGF0aWxsYXMlMjBhZGlkYXN8ZW58MHwwfDJ8fHww",
                title: "Urban Walker Earth",
                desc: "Tonos tierra con tracción reforzada para caminatas seguras por la ciudad.",
                price: "$135.50",
                bg: "radial-gradient(circle, #d97706, #451a03)"
            }
        ];

        let currentIndex = 0;

        // 2. Elementos del DOM
        const mainImage = document.getElementById('main-image');
        const viewerBg = document.getElementById('viewer-bg');
        const shoeTitle = document.getElementById('shoe-title');
        const shoeDesc = document.getElementById('shoe-desc');
        const shoePrice = document.getElementById('shoe-price');

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const thumbs = document.querySelectorAll('.thumb');

        // 3. Función central para actualizar la interfaz
        function updateGallery(index) {
            currentIndex = index;
            const product = products[currentIndex];

            // Animación de parpadeo suave al cambiar de imagen
            mainImage.style.opacity = '0';

            setTimeout(() => {
                // Actualiza datos dinámicos
                mainImage.src = product.img;
                viewerBg.style.background = product.bg;
                shoeTitle.textContent = product.title;
                shoeDesc.textContent = product.desc;
                shoePrice.textContent = product.price;
                mainImage.style.opacity = '1';
            }, 200);

            // Actualiza la clase activa visual en las miniaturas de abajo
            thumbs.forEach(thumb => thumb.classList.remove('active'));
            thumbs[currentIndex].classList.add('active');
        }

        // 4. Eventos para clics en los Thumbnails
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const targetIndex = parseInt(thumb.getAttribute('data-index'));
                updateGallery(targetIndex);});});
        // 5. Eventos para las Flechas de Navegación
        prevBtn.addEventListener('click', (e) => {e.stopPropagation(); // Evita interferencias de eventos
        let newIndex = currentIndex - 1;if (newIndex < 0) newIndex = products.length - 1; // Bucle al final
        updateGallery(newIndex);});nextBtn.addEventListener('click', (e) => {e.stopPropagation();let newIndex = currentIndex + 1;if (newIndex >= products.length) newIndex = 0; // Bucle al principio
        updateGallery(newIndex);});