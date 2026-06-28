// Creamos un H1
AOS.init({
    debounceDelay: 50,

});

const h1= document.createElement ('h1');
h1.textContent = 'Clase 14 - Crear elementos con JS';
document.body.appendChild(h1);

// Creamos un H2
const h2=document.createElement ('h2');
h2.textContent = 'Subtitulo (creado con el JS)';
document.body.appendChild(h2);
 // creamos un div
 const div = document.createElement ('div');
 div.textContent = 'Soy un div creado con JS, y pongo na foto';

 document.body.appendChild(div);

 // agragar imagen dentro el div
const img = document.createElement ('img');
img.src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheWF8ZW58MHx8MHx8fDA%3D" ;
img.style.border='2px solid';
img.style.marginLeft='1px';
div.append(img);
