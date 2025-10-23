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

document.addEventListener("DOMContentLoaded", () => {

    const botonModal = document.createElement("button");
    botonModal.textContent = "Mostrar mensaje";
    botonModal.classList.add("btn", "animar"); 
    botonModal.style.display = "block";
    botonModal.style.margin = "40px auto";
    botonModal.style.fontSize = "18px";
    botonModal.style.padding = "12px 20px";

    const seccionTestimonios = document.getElementById("testimonios");
    seccionTestimonios.parentNode.insertBefore(botonModal, seccionTestimonios);

    // === Crear el modal (oculto al inicio) ===
    const modal = document.createElement("div");
    modal.classList.add("mostrar"); 
    Object.assign(modal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "none", // Empieza oculto
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0,0,0,0.5)",
      zIndex: "1000"
    });

    document.body.appendChild(modal);
});
