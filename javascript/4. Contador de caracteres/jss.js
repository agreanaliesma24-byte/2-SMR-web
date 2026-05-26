let textarea = document.getElementById('mensaje');
let contador = document.getElementById('contador');
textarea.addEventListener('input', function() {
 let usados = textarea.value.length;
 let maximos = 140;
 contador.textContent = usados + ' / ' + maximos;
 if (usados > 120) {
 contador.style.color = 'red'; // Aviso cuando queda poco
 } else {
 contador.style.color = 'black';
 }
});