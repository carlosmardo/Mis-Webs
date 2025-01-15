// Seleccionamos el elemento nav
const nav = document.getElementById('nav');

// Añadimos un listener para el evento de scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // Cambia el fondo del nav a rojo si se ha hecho scroll
        nav.style.backgroundColor = '#1f2431';
    } else {
        // Restablece el color original si está en la parte superior
        nav.style.backgroundColor = 'transparent';
    }
});
