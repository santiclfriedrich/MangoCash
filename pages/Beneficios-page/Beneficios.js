document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const carousel = document.querySelector('.carousel');

    const scrollAmount = 200; // Ajusta este valor según el tamaño de tus tarjetas

    prevButton.addEventListener('click', function() {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});