const elementos = document.querySelectorAll(
'.producto, .card, .servicio, .review'
);

const mostrar = () => {
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", mostrar);
mostrar();