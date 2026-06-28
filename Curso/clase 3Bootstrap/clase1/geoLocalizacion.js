//localizacion de usuarios

async function obtenerUbicacionIP() {
    try {
        // Obtenemos los datos de geolocalización de la IP
        const respuesta = await fetch('https://ipinfo.io');
        const datos = await respuesta.json();
        
        console.log("Dirección IP:", datos.ip);
        console.log("Ciudad:", datos.city);
        console.log("Región:", datos.region);
        console.log("País:", datos.country);
        console.log("Coordenadas (Lat/Long):", datos.loc);
        
        // Ejemplo para mostrar el resultado en tu página web
        const elemento = document.getElementById("info-ubicacion");
        if (elemento) {
            elemento.innerHTML = `Tu IP es ${datos.ip} y estás en ${datos.city}, ${datos.country}.`;
        }
            
    } catch (error) {
        console.error("Error al obtener la ubicación:", error);
    }
}

// Ejecuta la función automáticamente al cargar el script
obtenerUbicacionIP();


// api.ipinfo.io/lite — try a live lookup
// curl api.ipinfo.io/lite/
