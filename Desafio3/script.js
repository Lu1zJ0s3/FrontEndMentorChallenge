const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const icone = botao.querySelector(".icone");

        if (icone.getAttribute("src") === "img/icon-plus.svg") {
            icone.setAttribute("src", "img/icon-minus.svg");
        } else {
            icone.setAttribute("src", "img/icon-plus.svg");
        }
    });
});