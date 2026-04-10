// Script principal para Maquillaje.html

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de maquillaje cargada');

    // Ejemplo: Agregar funcionalidad a los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Ejemplo: Alert al hacer clic en un producto
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Producto seleccionado: ' + this.querySelector('h3').textContent);
        });
    });
});