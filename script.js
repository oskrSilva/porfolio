// Manejo del formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulación de envío de correo
    alert(`¡Gracias, ${name}! Tu mensaje ha sido enviado.`);
    document.getElementById("contact-form").reset();
});
