// Banner automático (solo para index.html)
const slides = document.querySelectorAll('.banner-slide');

if (slides.length > 0) {
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 4000);
}

// WhatsApp
function contactWhatsApp(producto) {
    const telefono = '573001234567'; // Cambia este número por el tuyo
    const mensaje = `Hola! Me interesa el producto: ${producto}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}