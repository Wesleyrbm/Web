document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para os links do menu
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Carrossel de imagens
    const imagens = document.querySelector(".imagens");
    const totalImagens = document.querySelectorAll(".carrossel-img").length;
    let indexAtual = 0;

    function mostrarImagem(index) {
        imagens.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById("prev").addEventListener("click", function () {
        indexAtual = (indexAtual === 0) ? totalImagens - 1 : indexAtual - 1;
        mostrarImagem(indexAtual);
    });

    document.getElementById("next").addEventListener("click", function () {
        indexAtual = (indexAtual === totalImagens - 1) ? 0 : indexAtual + 1;
        mostrarImagem(indexAtual);
    });

    mostrarImagem(indexAtual);
});

document.getElementById("form-contato").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio do formulário se houver erro

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const mensagemErro = document.getElementById("mensagem-erro");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    mensagemErro.textContent = "";
    mensagemSucesso.textContent = "";

    if (nome === "" || email === "" || mensagem === "") {
        mensagemErro.textContent = "Preencha todos os campos!";
        return;
    }

    // Verificação de e-mail com expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensagemErro.textContent = "Digite um e-mail válido!";
        return;
    }

    // Se tudo estiver correto, exibe mensagem de sucesso
    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
    document.getElementById("form-contato").reset(); // Limpa os campos
});
