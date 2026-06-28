document.addEventListener ("DOMContentLoaded", function(){
    const mainImage=document.getElementById('mainImage');
    const prevBtn=document.querySelector('.prev-btn');
    const nextBtn=document.querySelector('.next-btn');
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const currentName=document.getElementById('currentName');
    const currentPrice=document.getElementById('currentPrice');
    let currentIndex=0;

    // funcion para actualizar la imagen
    function updateImage(index) {
        const item =thumbnails[index];
        const fullsize = item.getAttribute ('data-full');
        const name = item.getAttribute ('data-name');
        const price = item.getAttribute ('data-price');
        //Actualizamos imagen y texto
        mainImage.setAttribute('src',fullsize);
        currentName.textContent = name;
        currentPrice.textContent = price;

        // Actualizamos clase active en las miniaturas
        thumbnails.forEach(thumbnail =>{
            thumbnail.classList.remove('active');
        });
        item.classList.add('active');
            }

    // Evento para el boton siguiente
    if(nextBtn){
        nextBtn.addEventListener('click',function(){
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateImage(currentIndex);
        });
    }
    // evento para el boton anterior
     if(prevBtn){
        prevBtn.addEventListener('click',function(){
            currentIndex = (currentIndex - 1 + thumbnails.length)% thumbnails.length;
            updateImage(currentIndex);
        });
    }

    //teclado, flechas derecha e izquierda
    document.addEventListener ("keydown",function (event){
        if(event.key ==='ArrowRight'){
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateImage(currentIndex);
        }else if (event.key ==='ArrowLeft'){
            currentIndex = (currentIndex - 1 + thumbnails.length)% thumbnails.length;
            updateImage(currentIndex);
        }
    });
    // mostrar informacion al pasar el mouse (hover)
    thumbnails.forEach((thumbnail,index)=> {
        thumbnail.addEventListener('mouseover',function(){
            updateImage(index);
        });
    });
    //inicia primera imagen
    updateImage(0);

});