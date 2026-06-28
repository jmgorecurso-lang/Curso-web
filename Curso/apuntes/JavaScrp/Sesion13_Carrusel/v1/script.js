document.addEventListener ("DOMContentLoaded", function(){
    //Array con las url de las imagenes
    const imagenes = [
    "https://images.unsplash.com/photo-1565879381467-a5db3d97b757?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhZmV0ZXJhJTIwcHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1627888926504-3f10d99f8bd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhZmV0ZXJhJTIwcHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1747405505023-6835648e4d4c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNhZmV0ZXJhJTIwcHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1578554143025-50c9c1af99fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNhZmV0ZXJhJTIwcHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1651565404356-0421ad98db1c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNhZmV0ZXJhJTIwcHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D","https://images.unsplash.com/photo-1584347959218-f8868a287e82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxjYWZldGVyYSUyMHByb2Zlc2lvbmFsfGVufDB8fDB8fHww" ];

    const mainImage=document.getElementById("mainImage");
    const prevBtn=document.querySelector('.prev-btn');
    const nextBtn=document.querySelector('.next-btn');
    let currentIndex=0;

    // funcion para actualizar la imagen
    function updateImage(index) {
        mainImage.setAttribute('src',imagenes[index]);
            }
    // Evento para el boton siguiente
    if(nextBtn){
        nextBtn.addEventListener('click',function(){
            currentIndex = (currentIndex + 1) % imagenes.length;
            updateImage(currentIndex);
        });
    }
    // evento para el boton anterior
     if(prevBtn){
        prevBtn.addEventListener('click',function(){
            currentIndex = (currentIndex - 1 + imagenes.length)% imagenes.length;
            updateImage(currentIndex);
        });
    }
    if (currentIndex == 0) {
        updateImage (currentIndex);
    }
    //teclado, flechas derecha e izquierda
    document.addEventListener ("keydown",function (event){
        if(event.key ==='ArrowRight'){
            currentIndex = (currentIndex + 1) % imagenes.length;
            updateImage(currentIndex);
        }else if (event.key ==='ArrowLeft'){
            currentIndex = (currentIndex - 1 + imagenes.length)% imagenes.length;
            updateImage(currentIndex);
        }
    });
})