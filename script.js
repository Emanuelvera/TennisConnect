document.addEventListener("DOMContentLoaded", function() {
    var icono = document.getElementById("flecha");
  
    setTimeout(function() {
      icono.style.opacity = "1";}, 1800); 
  })
  

//para q la flecha desaparezca gradualmente cuando se scrolee para abajo
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var currentScroll = document.documentElement.scrollTop;
  var flecha = document.getElementById("flecha");
  
  if (currentScroll > lastScrollTop && currentScroll > 0) {
    // Scroll hacia abajo y no estamos en la parte superior de la página
    flecha.style.opacity = "0"; // Establece la opacidad de la flecha a 0
  } else {
    // Estamos en la parte superior de la página o estamos volviendo hacia arriba
    flecha.style.opacity = currentScroll === 0 ? "1" : "0"; // Establece la opacidad de la flecha a 1 solo si estamos en la parte superior de la página
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);



// script.js


var modal = document.getElementById("myModal");  // Obtener el modal
var btn = document.getElementById("openModal");  // Obtener el botón que abre el modal
var span = document.getElementsByClassName("close")[0]; // Obtener el elemento <span> que cierra el modal

btn.onclick = function() {
  modal.style.display = "block";  // Cuando el usuario hace clic en el botón, abre el modal
}

span.onclick = function() {
  modal.style.display = "none";// Cuando el usuario hace clic en <span> (x), cierra el modal
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";// Cuando el usuario hace clic en cualquier lugar fuera del modal, lo cierra
  }
}



