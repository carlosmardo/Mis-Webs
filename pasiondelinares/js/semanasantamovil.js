 // Verificar si el dispositivo es táctil
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    const cards = document.querySelectorAll('.card');
    let activeCard = null; // Referencia a la tarjeta actualmente en estado "hover"

    cards.forEach(card => {
        const originalImage = card.style.backgroundImage;
        const hoverImage = card.getAttribute('data-hover');

        // Inicializar el estado
        card.isHovered = false; 

        // Al hacer clic en la tarjeta, alternar entre el estado "hover" y el estado original
        card.addEventListener('click', (event) => {
            event.stopPropagation(); // Evitar que el clic en la tarjeta se propague al documento

            // Si ya está en estado "hover", restablecer
            if (card.isHovered) {
                card.style.backgroundImage = originalImage; // Regresa a la imagen original
                card.style.flexBasis = "0vw";
                card.isHovered = false;
                activeCard = null; // No hay tarjeta activa
            } else {
                // Restablecer cualquier tarjeta activa previamente
                if (activeCard) {
                    activeCard.style.backgroundImage = activeCard.getAttribute('data-original-image');
                    activeCard.style.flexBasis = "0vw";
                    activeCard.isHovered = false;
                }

                // Establecer la imagen y expandir
                card.style.backgroundImage = `url(${hoverImage})`;
                card.style.flexBasis = "100vw";
                card.isHovered = true;
                activeCard = card; // Guardar la tarjeta activa
            }
        });

        // Guardar la imagen original como atributo para resetear fácilmente
        card.setAttribute('data-original-image', originalImage);
    });

    // Al hacer clic en cualquier parte del documento, restablecer la tarjeta activa
    document.addEventListener('click', () => {
        if (activeCard) {
            activeCard.style.backgroundImage = activeCard.getAttribute('data-original-image');
            activeCard.style.flexBasis = "0vw";
            activeCard.isHovered = false; // Asegurarse de que el estado esté sincronizado
            activeCard = null; // No hay tarjeta activa
        }
    });
}