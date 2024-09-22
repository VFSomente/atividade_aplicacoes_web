        // Seleciona os elementos
        const imagem = document.getElementById("imagem");
        const audio = document.getElementById("meuAudio");

        // Quando o mouse passar sobre a imagem, o áudio toca
        imagem.addEventListener("mouseenter", () => {
            audio.play();
        });

        // Quando o mouse sair da imagem, o áudio pausa
        imagem.addEventListener("mouseleave", () => {
            audio.pause();
            audio.currentTime = 0; // Volta ao início
        });