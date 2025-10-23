// Esperar que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {

    // === Crear el botón reutilizando clases existentes ===
    const botonModal = document.createElement("button");
    botonModal.textContent = "Mostrar mensaje";
    botonModal.classList.add("btn", "animar"); // Usa clases del TP
    botonModal.style.display = "block";
    botonModal.style.margin = "40px auto";
    botonModal.style.fontSize = "18px";
    botonModal.style.padding = "12px 20px";
  
    // Insertar el botón justo antes de la sección de testimonios
    const seccionTestimonios = document.getElementById("testimonios");
    seccionTestimonios.parentNode.insertBefore(botonModal, seccionTestimonios);
  
    // === Crear el modal (oculto al inicio) ===
    const modal = document.createElement("div");
    modal.classList.add("mostrar"); // animación de aparición
    Object.assign(modal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0,0,0,0.5)",
      zIndex: "1000"
    });
  
    // === Contenido del modal ===
    const modalContenido = document.createElement("div");
    modalContenido.style.background = "white";
    modalContenido.style.padding = "30px";
    modalContenido.style.borderRadius = "10px";
    modalContenido.style.textAlign = "center";
    modalContenido.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
    modalContenido.innerHTML = `
      <h3>👋 Hola!</h3>
      <p>Este es un mensaje escrito por el Papi del proyecto ;)</p>
      <button class="btn">Cerrar</button>
    `;
  
    modal.appendChild(modalContenido);
    document.body.appendChild(modal);
  
    // === Función para mostrar el modal según clic ===
    function mostrarModal(tipoEvento) {
      modal.style.display = "flex";
      modalContenido.querySelector("p").textContent =
        tipoEvento === "click"
          ? "Hiciste clic izquierdo en el botón 👍"
          : "Hiciste clic derecho en el botón 👀";
    }
  
    // === Eventos del botón ===
    botonModal.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarModal("click");
    });
  
    botonModal.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      mostrarModal("contextmenu");
    });
  
    // === Cerrar el modal ===
    modalContenido.querySelector("button").addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // === Efecto de resaltado en las tarjetas ===
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => card.classList.add("resaltar"));
      card.addEventListener("mouseleave", () => card.classList.remove("resaltar"));
    });
  });
  