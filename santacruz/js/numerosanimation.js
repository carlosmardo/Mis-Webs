document.addEventListener('DOMContentLoaded', () => {
    const stats = [
        { element: document.querySelector('#estadisticas .stat-box:nth-child(1) .stat-value'), finalValue: '21:30', isTime: true },
        { element: document.querySelector('#estadisticas .stat-box:nth-child(2) .stat-value'), finalValue: 11.70 },
        { element: document.querySelector('#estadisticas .stat-box:nth-child(3) .stat-value'), finalValue: 7.07 },
        { element: document.querySelector('#estadisticas .stat-box:nth-child(4) .stat-value'), finalValue: 21.71 },
        { element: document.querySelector('#estadisticas .total-marches h3'), finalValue: 152, prefix: 'TOTAL MARCHAS: ' }
    ];

    const animationDuration = 2500; // 2.5 segundos
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(animationDuration / frameDuration);

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    function formatNumber(num) {
        return num.toFixed(2).replace('.', ',');
    }

    function formatTime(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.round(totalMinutes % 60);
        return `${hours}:${minutes.toString().padStart(2, '0')}`;
    }

    function animateValue(obj, frame) {
        const progress = easeOutQuad(frame / totalFrames);
        if (obj.isTime) {
            const totalMinutes = 21 * 60 + 30;
            const currentMinutes = Math.round(progress * totalMinutes);
            obj.element.textContent = formatTime(currentMinutes);
        } else {
            const value = progress * obj.finalValue;
            obj.element.textContent = obj.prefix ? obj.prefix + Math.round(value) : formatNumber(value);
        }
    }

    function animate() {
        let frame = 0;
        const step = () => {
            stats.forEach(stat => animateValue(stat, frame));
            frame++;
            if (frame <= totalFrames) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const statsSection = document.querySelector('#estadisticas .stats-grid');
    if (statsSection) {
        observer.observe(statsSection);
    }
});






document.addEventListener('DOMContentLoaded', () => {
    // Datos para animar las estadísticas
    const stats = [
        { element: document.querySelector('#repertorio .stat-box:nth-child(1) .number'), finalValue: 42 },
        { element: document.querySelector('#repertorio .stat-box:nth-child(2) .number'), finalValue: 11 },
        { element: document.querySelector('#repertorio .stat-box:nth-child(3) .number'), finalValue: 26 },
        { element: document.querySelector('#repertorio .stat-box:nth-child(4) .number'), finalValue: 5 }
    ];

    const animationDuration = 3000; // 3 segundos
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(animationDuration / frameDuration);

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    function formatNumber(num) {
        return Math.round(num); // Ajustar para números enteros
    }

    function animateValue(obj, frame) {
        const progress = easeOutQuad(frame / totalFrames);
        const value = progress * obj.finalValue;
        obj.element.textContent = formatNumber(value);
    }

    function animate() {
        let frame = 0;
        const step = () => {
            stats.forEach(stat => animateValue(stat, frame));
            frame++;
            if (frame <= totalFrames) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }

    // Intersection Observer para animar cuando sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const statsSection = document.querySelector('#repertorio .stats-grid');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Lógica para las pestañas de filtro
    const tabs = document.querySelectorAll('#repertorio .tab-btn');
    const songItems = document.querySelectorAll('#repertorio .song-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Eliminar la clase activa de todos los botones
            tabs.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase activa al botón actual
            tab.classList.add('active');

            const filter = tab.dataset.filter;
            songItems.forEach(item => {
                if (filter === 'todas' || item.dataset.category === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});