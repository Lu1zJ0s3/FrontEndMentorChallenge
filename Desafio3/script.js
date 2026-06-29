const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        
        const icone = botao.querySelector(".icone");
        const containerPergunta = botao.closest(".perguntas");
        const resposta = containerPergunta.nextElementSibling;

        if (icone.getAttribute("src") === "img/icon-plus.svg") {
            icone.setAttribute("src", "img/icon-minus.svg");
            resposta.style.display = "block"; 
        } else {
            icone.setAttribute("src", "img/icon-plus.svg");
            resposta.style.display = "none"; 
        }
    });
});