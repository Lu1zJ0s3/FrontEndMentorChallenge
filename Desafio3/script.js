const btt1 = document.getElementById("btt1");
const icone = document.getElementById("icone");

btt1.addEventListener("click", () => {
    if (icone.src.includes("icon-plus.svg")) {
        icone.src = "img/icon-minus.svg";
    } else {
        icone.src = "img/icon-plus.svg";
    }
});