// Selecciona todas las tarjetas de los discos
const cards = document.querySelectorAll('.card');

// Configuración del IntersectionObserver
const observerOptions = {
    root: null, // Usa el viewport como contenedor
    rootMargin: '0px',
    threshold: .95 // Detecta cuando al menos el 50% de la tarjeta está visible
};

// Callback para el IntersectionObserver
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añade la clase para el efecto de volteo
            entry.target.classList.add('in-view');
        } else {
            // Elimina la clase cuando la tarjeta no esté en el centro
            entry.target.classList.remove('in-view');
        }
    });
};

// Crear y activar el IntersectionObserver solo en dispositivos menores a 1100px
const handleViewportChange = () => {
    if (window.matchMedia('(max-width: 1100px)').matches) {
        // Activa el IntersectionObserver si el ancho es menor a 1100px
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        cards.forEach(card => observer.observe(card));
    } else {
        // Limpia las clases si se vuelve a una resolución mayor
        cards.forEach(card => card.classList.remove('in-view'));
    }
};

// Ejecuta al cargar la página
handleViewportChange();

// Vuelve a verificar si cambia el tamaño del viewport
window.addEventListener('resize', handleViewportChange);

