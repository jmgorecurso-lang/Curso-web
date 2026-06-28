async function mostrarUbicacionEnWeb() {
    const contenedor = document.getElementById("ubicacion");

    try {
        const respuesta = await fetch('https://ipinfo.io');

        // 1. Validamos si la respuesta del servidor es correcta (estatus 200)
        if (!respuesta.ok) {
            throw new Error(`Error del servidor: ${respuesta.status} - Posible límite de API alcanzado`);
        }

        const datos = await respuesta.json();

        if (contenedor) {
            contenedor.innerHTML = `
                <h3>📍 Datos del Visitante</h3>
                <p><strong>IP:</strong> ${datos.ip}</p>
                <p><strong>Ciudad:</strong> ${datos.city}</p>
                <p><strong>Región:</strong> ${datos.region}</p>
                <p><strong>País:</strong> ${datos.country}</p>
            `;
        }

    } catch (error) {
        console.error("Detalle del error:", error);
        if (contenedor) {
            // 2. Mostramos un mensaje amigable al usuario en lugar de romper la web
            contenedor.innerHTML = "<p>⚠️ Ubicación no disponible (Límite de API excedido o AdBlock activo).</p>";
        }
    }
}

mostrarUbicacionEnWeb();
