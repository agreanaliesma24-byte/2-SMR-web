// 1. Selección del elemento del DOM
const imagen = document.getElementById('imagen-interactiva');

// URLs de las imágenes que se van a intercambiar
const imagenOriginal = "./img/imagen1.jpg"; 
const imagenAlternativa = "./img/imagen2.jpg";  

// 2. Evento: El ratón entra en el área de la imagen
imagen.addEventListener('mouseenter', () => {
    imagen.src = imagenAlternativa;
    imagen.alt = "Detalle del equipo de administración";
});

// 3. Evento: El ratón sale del área de la imagen
imagen.addEventListener('mouseleave', () => {
    imagen.src = imagenOriginal;
    imagen.alt = "Infraestructura de Red Primaria";
});