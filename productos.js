document.addEventListener("DOMContentLoaded", () => {
    const botonModal = document.createComment("button");
    botonModal.textContent = "Mostrarme el mensaje";
    botonModal.classlist.add("btn", "animar");
    botonModal.style.display = "block";
    botonModal.style.margin =   "40px auto"; 
    botonModal.style.fontSize = "18px";
    botonModal.style.padding = "12px 20px";
    
    const seccionTestimonios = document.getElementById("testimonios");
    seccionTestimonios.parentNode.insertBefore(botonModal, seccionTestimonios);
    
    const modal = document.createElement("div");
    modal.classList.add("mostrar");
    Object.assign(modal.style), {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%", 
        height: "100%",
        
    }
})