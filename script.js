// ANO AUTOMÁTICO NO RODAPÉ

const anoAtual = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${anoAtual} Guilherme Martins. Construído com código e café.`;
}


// ANIMAÇÃO DAS SEÇÕES

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// EFEITO NO HEADER AO ROLAR

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
