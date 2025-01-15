// Manejar clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        // Remueve la clase 'active' de todos los enlaces
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('active'));

        // Agrega la clase 'active' al enlace que se clickeó
        this.classList.add('active');
    });
});

// Manejar clic en la flecha
document.getElementById('logoContainer').addEventListener('click', function () {
    // Remueve la clase 'active' de todos los enlaces
    document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('active'));
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Ajuste para detectar antes
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id'); // Obtener el ID de la sección actual
            }
        });

        // Quitar y agregar la clase activa
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});

