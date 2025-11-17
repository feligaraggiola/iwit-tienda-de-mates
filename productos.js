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


cerrar.addEventListener("click", () => {
  modal.classList.add("oculto");
});
<script>
  const btnIG = document.getElementById("btn-instagram");
  const textoIG = document.getElementById("texto-ig");

  btnIG.addEventListener("click", () => {
    textoIG.textContent = "Sígueme en Instagram";
  });
</script>

