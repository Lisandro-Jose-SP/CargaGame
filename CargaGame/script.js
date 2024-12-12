// Asegúrate de que este archivo está en el mismo directorio que index.html, o ajusta la ruta en el script src en HTML
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    this.reset();
});