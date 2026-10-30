window.addEventListener('DOMContentLoaded', setupCarousel);
window.addEventListener('resize', setupCarousel);

function setupCarousel() {
    if (window.innerWidth <= 767) {
        $('.gallery').slick({
            slidesToShow: 1, // Mostrar una imagen a la vez
            slidesToScroll: 1, // Desplazarse una imagen a la vez
            autoplay: true, // Activar el autoplay
            autoplaySpeed: 2000 // Velocidad de autoplay en milisegundos
        });
    } else {
        $('.gallery').slick('unslick'); // Destruir el carrusel si el ancho de la ventana es mayor que 767px
    }
}