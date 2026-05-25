// Corrige los errores
let special = document.getElementById("special");
console.log(special);


textarea.addEventListener('input', function() {
  // Obtener la longitud del texto actual
  let usados = textarea.value.length; 
  let maximos = 120;
 
  //Inserta el códido para mostrar el texto de textarea en consola

  //---  
  contador.textContent = usados + ' / ' + maximos; 

 
  if (usados > 120)  
    contador.style.color = 'red';    
    else 
   
    contador.style.color = 'black';
    
});