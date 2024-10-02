document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    // Escucha el cambio en el checkbox
    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            navbar.style.display = 'block'; // Muestra el menú
        } else {
            navbar.style.display = 'none'; // Oculta el menú
        }
    });
});
