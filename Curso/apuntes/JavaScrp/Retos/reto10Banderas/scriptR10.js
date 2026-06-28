document.addEventListener('DOMContentLoaded', function () {
    const paisesMundo = {
        spain: { bandera: "https://www.banderas-mundo.es/data/flags/h80/es.webp", nombre: 'España' },
        noruega: { bandera: "https://www.banderas-mundo.es/data/flags/h80/no.webp", nombre: 'Noruega' },
        italia: { bandera: "https://www.banderas-mundo.es/data/flags/h80/it.webp", nombre: 'Italia' },
        barbados: { bandera: "https://www.banderas-mundo.es/data/flags/h80/bb.webp", nombre: 'Barbados' },
        canada: { bandera: "https://www.banderas-mundo.es/data/flags/h80/ca.webp", nombre: 'Canadá' },
        corea: { bandera: "https://www.banderas-mundo.es/data/flags/h80/kr.webp", nombre: 'Corea del Sur' },
        thai: { bandera: "https://www.banderas-mundo.es/data/flags/h80/th.webp", nombre: 'Tailandia' },
        usa: { bandera: "https://www.banderas-mundo.es/data/flags/h80/us.webp", nombre: 'Estados Unidos' },
        man: { bandera: "https://www.banderas-mundo.es/data/flags/h80/im.webp", nombre: 'Isla de Man' }
    };

    const land = document.getElementById('paises');
    const bandera = document.querySelector('img');
    const infoPaisSpan = document.getElementById('infoPais');
    const limpia = document.getElementById('btnLimpia');

    land.addEventListener('change', function () {
        const paisElegido = this.value;

        if (paisElegido && paisesMundo[paisElegido]) {
            const datosDelPais = paisesMundo[paisElegido];
            bandera.src = datosDelPais.bandera;
            infoPaisSpan.textContent = datosDelPais.nombre;
        } else {
            location.reload();
        }
    });

    limpia.addEventListener('click', function () {
        location.reload();
    });
});