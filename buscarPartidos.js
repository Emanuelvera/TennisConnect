//Toggle MENU
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
  });
  
  
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
  