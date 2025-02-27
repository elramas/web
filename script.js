document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (!menuToggle) {
        console.error("El elemento 'mobile-menu' no se encontró.");
    }

    if (!navList) {
        console.error("El elemento 'nav-list' no se encontró.");
    }

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        console.log("Menú clicado. Estado actual de 'active':", navList.classList.contains('active'));
    });
});

