 document.addEventListener("DOMContentLoaded", () => {
            const signals = document.querySelectorAll(".signal");
            const explanationPanel = document.querySelector(".explanation-panel");
            const defaultMessage = document.querySelector(".default-message");
            const contentWrapper = document.querySelector(".explanation-content-wrapper");
            const explanationTitle = document.querySelector(".explanation-title");
            const explanationContent = document.querySelector(".explanation-content");
            defaultMessage.innerHTML = "<p>Pasa el cursor sobre una señal para ver los detalles aquí.</p>";

            // 4. Escuchamos los eventos del ratón para cada señal
            signals.forEach(signal => {

               // Mostrar informacion al pasar el mouse (hover)
                signal.addEventListener("mouseover", () => {
                    // Quitamos la clase 'active' de todas las señales
                    signals.forEach(s => s.classList.remove("active"));

                    // Añadimos la clase 'active' a la señal actual y aplicamos borde naraja
                    signal.classList.add("active");

                    // Extraemos los textos de la señal actual
                    const name = signal.querySelector(".signal-name").textContent;
                    const info = signal.querySelector("img").getAttribute("data-info");

                    defaultMessage.style.display = "none";
                    contentWrapper.style.display = "block";

                    // Actualizamos el título y la descripción
                    explanationTitle.textContent = name;
                    explanationContent.textContent = info;
                });


            });
        });