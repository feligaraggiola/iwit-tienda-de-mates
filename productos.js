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
    Object.assign(modal.style, {
        position: "fixed"
        top: "0",
        left: "0",
        width: "100%", 
        height: "100%",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.5)",
        zIndex: "1000px";
    })

    const modalContenido = document.createElement("div");
    modalContenido.style.background = "black";
    modalContenido.style.padding ="30px";
    modalContenido.style.borderRadius ="10px";
    modalContenido.style.textAlign = "center";
    modalContenido.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
    modalContenido.innerHTML= '
        <h3> Hola te dejo un mensaje asi laburas </h3>

        <buttom class="btn">Cerrar</buttom>
    ';

    
})