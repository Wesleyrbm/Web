document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para os links do menu
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Carrossel de imagens
    const imagens = document.querySelectorAll(".carrossel-img");
    const descricao = document.getElementById("descricao");
    const btnPrev = document.getElementById("prev");
    const btnNext = document.getElementById("next");
    const carrosselContainer = document.querySelector(".imagens");

    let indiceAtual = 0;
    const totalImagens = imagens.length;

    const descricoes = [
        `HTML, CSS e JavaScript<br>Estou começando a me aventurar no mundo do HTML, CSS e JavaScript. É um mundo cheio de possibilidades! Ainda não tenho um projeto finalizado, mas pretendo seguir desenvolvendo este portfólio e hospedá-lo online.`,
        `Programação em C<br>A linguagem de programação com a qual tenho mais afinidade. Foi a mais utilizada durante a faculdade, por isso tenho bastante experiência com ela.`,
        `Banco de Dados<br>É a área na qual pretendo seguir carreira. Atualmente, trabalho como suporte em uma empresa de software ERP, o que me permite interagir bastante com bancos de dados.`
    ];

    function atualizarCarrossel() {
        const larguraImagem = imagens[0].clientWidth;
        carrosselContainer.style.transition = "transform 0.5s ease-in-out";
        carrosselContainer.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
        descricao.innerHTML = descricoes[indiceAtual];
    }

    // Função de navegação do carrossel
    function moveCarrossel(direction) {
        indiceAtual = (indiceAtual + direction + totalImagens) % totalImagens;
        atualizarCarrossel();
    }

    btnNext.addEventListener("click", () => moveCarrossel(1));
    btnPrev.addEventListener("click", () => moveCarrossel(-1));

    // Melhorando a acessibilidade
    btnNext.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") moveCarrossel(1);
    });

    btnPrev.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") moveCarrossel(-1);
    });

    // Ajusta o carrossel quando a janela for redimensionada
    window.addEventListener("resize", atualizarCarrossel);

    atualizarCarrossel();

    // Formulário de contato
    const form = document.getElementById("form-contato");
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const mensagemErro = document.getElementById("mensagem-erro");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o envio do formulário

        mensagemErro.textContent = "";
        mensagemSucesso.textContent = "";

        // Verificação de campos vazios
        if (!nome.value.trim() || !telefone.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
            mensagemErro.textContent = "Preencha todos os campos!";
            return;
        }

        // Validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            mensagemErro.textContent = "Digite um e-mail válido!";
            return;
        }

        // Se tudo estiver correto, exibe mensagem de sucesso
        mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
        form.reset(); // Limpa os campos
    });
});
