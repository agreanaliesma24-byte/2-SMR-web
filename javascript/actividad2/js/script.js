// JavaScript
let btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', function() {
 document.body.classList.toggle('oscuro');
 // Actualizar el texto del botón
 if (document.body.classList.contains('oscuro')) {
 btnTema.textContent = 'Cambiar a modo claro';
 } else {
 btnTema.textContent = 'Cambiar a modo oscuro';
 }
});