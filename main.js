document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave ao clicar nos links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Carrossel de imagens
    const imagens = document.querySelectorAll(".carrossel-img");
    let indexAtual = 0;
    
    function mostrarImagem(index) {
        imagens.forEach(img => img.style.display = "none");
        imagens[index].style.display = "block";
    }
    
    document.getElementById("prev").addEventListener("click", function () {
        indexAtual = (indexAtual === 0) ? imagens.length - 1 : indexAtual - 1;
        mostrarImagem(indexAtual);
    });
    
    document.getElementById("next").addEventListener("click", function () {
        indexAtual = (indexAtual === imagens.length - 1) ? 0 : indexAtual + 1;
        mostrarImagem(indexAtual);
    });
    
    mostrarImagem(indexAtual);
});
