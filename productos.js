const boton = document.getElementById("boton-modal");
const modal = document.getElementById("miModal");
const cerrar = document.getElementById("cerrar-modal");
const mensaje = document.getElementById("mensaje-modal");

// Clic izquierdo -> mensaje visible
boton.addEventListener("click", () => {
  mensaje.textContent = "Mensaje visible ✅";
  mensaje.style.color = "#2e7d32";
  modal.classList.remove("oculto");
});

// Clic derecho -> mensaje oculto
boton.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // Evita el menú del clic derecho
  mensaje.textContent = "Mensaje oculto 🔒";
  mensaje.style.color = "#d32f2f";
  modal.classList.remove("oculto");
});

cerrar.addEventListener("click", () => {
  modal.classList.add("oculto");
});
