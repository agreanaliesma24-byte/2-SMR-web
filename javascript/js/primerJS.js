let boton = document.getElementById('btn-saludar');
boton.addEventListener('click', function() {
 let nombre = document.getElementById('nombre').value;
 let resultado = document.getElementById('resultado');
 if (nombre === '') {
 resultado.textContent = 'Por favor, escribe tu nombre.';
 resultado.style.color = 'red';
 } else {
 resultado.textContent = '¡Hola, ' + nombre + '!';
 resultado.style.color = 'green';
 }
});