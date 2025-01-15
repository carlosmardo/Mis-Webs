document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los artículos
    const articles = document.querySelectorAll('.news-item');

    // Agregar un evento de clic a cada artículo
    articles.forEach(function(article) {
        article.addEventListener('click', function() {
            // Obtener la URL almacenada en el atributo data-link
            const link = article.getAttribute('data-link');
            
            // Abrir la URL en una nueva pestaña si el atributo data-link existe
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});