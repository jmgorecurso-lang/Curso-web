 // Obtener el botón
        const scrollBtn = document.getElementById('scrollTopBtn');

        // Función para verificar la posición del scroll y mostrar/ocultar la flecha
        function toggleScrollButton() {
            if (!scrollBtn) return;
            // Si el scroll vertical es mayor a 300px se muestra la flecha.
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        }

        // Escuchar evento scroll
        window.addEventListener('scroll', toggleScrollButton);

        // Escuchar evento load para verificar estado inicial (por si la página ya tiene scroll al cargar)
        window.addEventListener('load', toggleScrollButton);

        // Comportamiento de clic: desplazamiento suave hacia arriba
        if (scrollBtn) {
            scrollBtn.addEventListener('click', function (e) {
                e.preventDefault();  // Evita el salto abrupto con #
                // Smooth scroll hacia el principio del documento
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
