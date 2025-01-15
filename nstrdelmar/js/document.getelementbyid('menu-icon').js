/*document.getElementById('menu-icon').addEventListener('click', function () {
  document.getElementById('nav-list').classList.toggle('show');
});*/

// Obtenemos todos los elementos <a> dentro de la lista de navegación
var links = document.querySelectorAll('.nav-list a');

// Agregamos un evento de clic a cada enlace
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Cerramos la barra de navegación
    document.getElementById('nav-list').classList.remove('show');
  });
});

// Agregamos el evento de clic al icono de menú
document.getElementById('menu-icon').addEventListener('click', function () {
  document.getElementById('nav-list').classList.toggle('show');
});