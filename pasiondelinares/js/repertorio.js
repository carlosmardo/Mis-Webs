document.addEventListener('DOMContentLoaded', () => {
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