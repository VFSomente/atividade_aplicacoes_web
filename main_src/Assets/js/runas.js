// Seleciona os dois botões
const botoes = document.querySelectorAll(".botao-alternar");
const conteudos = document.querySelectorAll(".conteudo");

// Adiciona um evento de clique a cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remove a classe "ativo" do conteúdo atualmente ativo
        const conteudoAtivo = document.querySelector(".conteudo.ativo");
        if (conteudoAtivo) {
            conteudoAtivo.classList.remove("ativo");
        }

        // Remove a classe "ativo" do botão atualmente ativo
        const botaoAtivo = document.querySelector(".botao-alternar.ativo");
        if (botaoAtivo) {
            botaoAtivo.classList.remove("ativo");
        }

        // Adiciona a classe "ativo" ao botão clicado
        botao.classList.add("ativo");

        // Adiciona a classe "ativo" ao conteúdo correspondente
        conteudos[indice].classList.add("ativo");
    });
});
