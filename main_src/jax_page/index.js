const botoes = document.querySelectorAll(".botao");
const habilidades = document.querySelectorAll(".champion");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
         const botaoSelecionado = document.querySelector(".botao.selecionado");
         botaoSelecionado.classList.remove("selecionado");

         botao.classList.add("selecionado");

         const championSelecionado = document.querySelector(".champion.selecionado");
         championSelecionado.classList.remove("selecionado");
         
         habilidades[indice].classList.add("selecionado");
            });
    })
