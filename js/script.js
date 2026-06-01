const elementos = document.querySelectorAll("header, section, footer");

elementos.forEach((elemento) => {
    elemento.classList.add("hidden");
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("show");
        }
    });
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});
