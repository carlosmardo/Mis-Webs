 document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menuToggle'); // Botón de la hamburguesa
            const menu = document.getElementById('menu'); // Menú oculto
            const nav = document.getElementById('nav');

            // Alternar el estado activo de la hamburguesa y el menú
            menuToggle.addEventListener('click', () => {
                menu.classList.toggle('active'); // Mostrar/ocultar el menú
                menuToggle.classList.toggle('active'); // Cambiar el ícono de la hamburguesa
            });

            // Opcional: cerrar el menú al hacer clic en un enlace
            const menuLinks = menu.querySelectorAll('li a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active'); // Ocultar el menú
                    menuToggle.classList.remove('active'); // Restaurar el ícono de la hamburguesa
                });
            });
            const menuLinks1 = nav.querySelectorAll('ul li a');
            menuLinks1.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active'); // Ocultar el menú
                    menuToggle.classList.remove('active'); // Restaurar el ícono de la hamburguesa
                });
            });
        });