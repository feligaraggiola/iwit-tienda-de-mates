// Espera a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos los elementos del HTML
  const boton = document.getElementById("boton-modal");
  const modal = document.getElementById("modal");
  const cerrar = document.getElementById("cerrar-modal");

  // Verificamos que existan (por si el script se usa en varias páginas)
  if (boton && modal && cerrar) {

    // 👉 Evento de click izquierdo
    boton.addEventListener("click", () => {
      modal.classList.remove("oculto"); // muestra el modal
    });

    // 👉 Evento de click derecho (contextmenu)
    boton.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // evita que se abra el menú del clic derecho
      modal.classList.remove("oculto"); // muestra el modal
    });

    // 👉 Cerrar el modal
    cerrar.addEventListener("click", () => {
      modal.classList.add("oculto"); // oculta el modal
    });
  }
});
