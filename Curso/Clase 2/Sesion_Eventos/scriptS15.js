document.addEventListener('DOMContentLoaded', function () {
    const imagenes = {
        1: "https://cdn-icons-png.flaticon.com/128/63/63928.png",
        2: "https://cdn-icons-png.flaticon.com/128/4334/4334124.png",
        3: "https://cdn-icons-png.flaticon.com/128/3529/3529417.png",
        4: "https://cdn-icons-png.flaticon.com/128/17301/17301455.png",
        5: "https://cdn-icons-png.flaticon.com/128/5768/5768016.png",
        6: "https://cdn-icons-png.flaticon.com/128/6071/6071588.png"
    };
    const numberSelect = document.getElementById('numberSelect');//coje el id del select id del html
    const imagen = document.querySelector('img'); // busca a img en el html y pone la imagen hay


    numberSelect.addEventListener('change', function () {
        const numberSeleccionado = this.value;

        imagen.src = imagenes[numberSeleccionado];

    });
    // ejemplo2 Seleccion de cursos
    const cursoSelect = document.getElementById('curso');
    const infoCursoDiv = document.getElementById('infoCurso');
    const cursoNombreSpan = document.getElementById('cursoNombre');
    const cursoDuracionSpan = document.getElementById('cursoDuracion');
    const cursoInfoSpan = document.getElementById('cursoInfo');
    const btnReset = document.getElementById('btnLimpia');
    //Datos de los cursos
    const programacion = {
        javascript: {
            Nombre: 'Java Script Basico',
            Duracion: '300 horas',
            Descripcion: 'Aprende los fundamentos básicos de JavaScript, el lenguaje mas usado para la programación web.'
        },
        java: {
            Nombre: 'Java Basico',
            Duracion: '500 horas',
            Descripcion: 'Aprende los fundamentos básicos de Java, el lenguaje mas utilizado para la aplicaciones de escritorio.'
        },
        python: {
            Nombre: 'Python Avanzado',
            Duracion: '500 horas',
            Descripcion: 'Continuamos con el lenguaje mas utilizado en backend, y scripting de seguridad y pentesting.'
        }
    };
    //Inicia evento al seleccionar un curso
   cursoSelect.addEventListener ('change',function(){
    const cursoSeleccionado = this.value;
    if(cursoSeleccionado){
        const info = programacion [cursoSeleccionado];
        cursoNombreSpan.textContent = info.Nombre;
        cursoDuracionSpan.textContent = info.Duracion;
        cursoInfoSpan.textContent = info.Descripcion;
    }else{
        // Si no seleccionamos curso, limpiarmos la información
        cursoNombreSpan.textContent ="";
        cursoDuracionSpan.textContent ="";
        cursoInfoSpan.textContent ="";
    }

   })
    btnReset.addEventListener ('click',function(){
       // location.reload();
        cursoSelect.value="";
        cursoNombreSpan.textContent ="";
        cursoDuracionSpan.textContent ="";
        cursoInfoSpan.textContent ="";
    });

});

