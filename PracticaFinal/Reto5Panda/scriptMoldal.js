// array con los detalles del proyecto
const detalles = {
    detalle1: {
        titulo: "Proyecto 1: Reforestación de bambú",
        descripcion: "Objetivo: Restaurar 50 hectáreas de bosque de bambú en el Himalaya oriental",
        punto1: "-Acciones: Plantar 10.000 brotes de bambú",
        punto2: "-Beneficio: Asegura la fuente de alimentación del panda",
        punto3: "-Impacto: Beneficia a mas de 30 especies de fauna local",
    },
    detalle2: {
        titulo: "Proyecto 2: Monitoreo con GPS",
        descripcion: "Objetivo: Restaurar 50 hectáreas de bosque de bambú en el Himalaya oriental",
        punto1: "-Acciones: Plantar 10.000 brotes de bambú",
        punto2: "-Beneficio: Asegura la fuente de alimentación del panda",
        punto3: "-Impacto: Beneficia a mas de 30 especies de fauna local",
    },
    detalle3: {
        titulo: "Proyecto 3: Educación Ambiental",
        descripcion: "Objetivo: Restaurar 50 hectáreas de bosque de bambú en el Himalaya oriental",
        punto1: "-Acciones: Plantar 10.000 brotes de bambú",
        punto2: "-Beneficio: Asegura la fuente de alimentación del panda",
        punto3: "-Impacto: Beneficia a mas de 30 especies de fauna local",

    },
};

// Seleccionamos todos los botones con la clase 'view-details'
const botones = document.querySelectorAll('.view-details');
//Transforma contenedor estatico en objeto interactivo
const modal=new bootstrap.Modal(document.getElementById('descriptionModal'));

const modalTitle = document.getElementById('modalProductLabel');
const descriptionContainer = document.getElementById('descriptionProduct');

document.addEventListener("DOMContentLoaded",function (){
    //Function para mostrar la descripcion en el modal
    function mostrarDescripcion(productId){
        const producto = detalles[productId];
        if (producto) {
            //Actualiza titulo Modal
            modalTitle.textContent = producto.titulo;
            // actualiza descripcion con formato html
            descriptionContainer.innerHTML = `
            <div class="mb-3">
            <span class="badge bg-info text-dark mb-2">Información detallada</span>
            <p class="mt-2">${producto.texto}</p>
            <hr>
            <small class="text-muted">ID del producto: ${productId}</small>
            </div>`;
            //mostrar el modal
            modal.show();
        }else{
            descriptionContainer.innerHTML = `<p class="text-danger">Detalle no disponible temporalmente</p>`;
            modal.show ();
        }
    }
    //Agregar evento click a cada botón
    botones.forEach(boton=> {
        boton.addEventListener('click',function(e){
            e.preventDefault();
            const productId = this.getAttribute (`data-product`);
            mostrarDescripcion(productId);
        });
    })
})
