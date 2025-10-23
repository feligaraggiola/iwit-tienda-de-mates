// Esperar que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {

    // === Crear el botón reutilizando clases existentes ===
    const botonModal = document.createElement("button");
    botonModal.textContent = "Mostrar mensaje"; // Botón listo para interactuar
    botonModal.classList.add("btn", "animar"); 
    botonModal.style.display = "block";
    botonModal.style.margin = "40px auto";
    botonModal.style.fontSize = "18px";
    botonModal.style.padding = "12px 20px";

    // Insertar el botón justo antes de la sección de testimonios
    const seccionTestimonios = document.getElementById("testimonios");
    seccionTestimonios.parentNode.insertBefore(botonModal, seccionTestimonios);
});
