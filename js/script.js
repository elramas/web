document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu'); // Seleccionar por ID
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active'); // Alternar la clase para mostrar/ocultar
    });
});