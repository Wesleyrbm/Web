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
    const imagens = document.querySelectorAll(".carrossel-img");
    const descricao = document.getElementById("descricao");
    const btnPrev = document.getElementById("prev");
    const btnNext = document.getElementById("next");

    let indiceAtual = 0;
    const totalImagens = imagens.length;

    const descricoes = [
        `HTML, CSS e JavaScript
        \nEstou começando a me aventura no mundo do HMTL, CSS e JavaScript, é o mundo cheio de 
        possibilidade. Não tenho ainda um projeto de fato, porém pretendo dar seguimento neste meu 
        portifólio afim de hospedar ele um site.`,
        
        `Programação em C
        \nA linguagem de programação que eu tenho mias afinidade, é a linguagem que eu mais utilizei 
        por causa da faculdade .`,
        
        `Banco de Dados
        \nE aonde eu pretendo seguir carreira, estou atuamente trabalhando como suporte em 
        um empresa de sofwtare ERP, dessa forma acabo interagindo como esse meio.`
    ];
    

    function atualizarCarrossel() {
        const larguraImagem = imagens[0].clientWidth;
        document.querySelector(".imagens").style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
        descricao.innerHTML = descricoes[indiceAtual].replace(/\n/g, "<br>");

    }

    // Função de navegação do carrossel
    function moveCarrossel(direction) {
        indiceAtual = (indiceAtual + direction + totalImagens) % totalImagens;
        atualizarCarrossel();
    }

    btnNext.addEventListener("click", () => moveCarrossel(1));
    btnPrev.addEventListener("click", () => moveCarrossel(-1));

    atualizarCarrossel();

    // Formulário de contato
    document.getElementById("form-contato").addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o envio do formulário se houver erro

        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const mensagemErro = document.getElementById("mensagem-erro");
        const mensagemSucesso = document.getElementById("mensagem-sucesso");

        mensagemErro.textContent = "";
        mensagemSucesso.textContent = "";

        // Verificação de campos vazios
        if (nome === "" || telefone === "" || email === "" || mensagem === "") {
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
});
