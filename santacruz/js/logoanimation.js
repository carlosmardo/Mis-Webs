window.addEventListener('DOMContentLoaded', () => {
    const navLogo = document.getElementById('navLogo');
    const nav = document.getElementById('nav');
    const scaleMax = 1; // Tamaño máximo de la imagen
    const shrinkSpeed = 550; // Distancia de scroll en px donde se ajusta el tamaño
    const marginEnd = 30; // Margen superior final
    let scaleMin = 0.22; // Tamaño mínimo base de la imagen

    // Función para actualizar scaleMin dinámicamente según el ancho del dispositivo
    function updateScaleMin() {
        if (window.innerWidth < 900 && window.innerWidth > 500 ) {
            scaleMin = 0.28; // Tamaño mínimo más grande para dispositivos pequeños
        } else if (window.innerWidth < 500) {
            scaleMin = 0.37; // Tamaño mínimo aún más grande para dispositivos más pequeños
        } else {
            scaleMin = 0.22; // Tamaño mínimo estándar
        }
    }

    // Llamar a la función inicialmente y también al redimensionar la ventana
    updateScaleMin();
    window.addEventListener('resize', updateScaleMin);

    // Obtener el valor dinámico del margen superior inicial desde CSS
    const computedStyle = getComputedStyle(navLogo);
    const marginStart = parseFloat(computedStyle.marginTop); // Lee el margen superior desde CSS

    // Función de ajuste al hacer scroll
    function adjustLogoOnScroll() {
        const scrollY = window.scrollY;

        // Limitar el porcentaje de desplazamiento al rango [0, 1]
        const scrollPercent = Math.min(scrollY / shrinkSpeed, 1);

        // Calcular escala
        const scale = scaleMax - scrollPercent * (scaleMax - scaleMin);

        // Calcular margen superior dinámico
        const marginTop = marginStart - scrollPercent * (marginStart - marginEnd);

        // Aplicar escala y margen superior
        navLogo.style.transform = `scale(${scale})`;
        navLogo.style.marginTop = `${marginTop}px`;

        // Asegurar el estado inicial al volver a la parte superior
        if (scrollY === 0) {
            navLogo.style.transform = `scale(${scaleMax})`;
            navLogo.style.marginTop = `${marginStart}px`;
        }
    }

    // Evento de desplazamiento
    window.addEventListener('scroll', adjustLogoOnScroll);

    // Evento para redirigir al inicio con desplazamiento suave al hacer clic en el logo
    document.getElementById('logoContainer').addEventListener('click', function () {
        document.getElementById('inicio').scrollIntoView({
            behavior: 'smooth'
        });
    });
});



