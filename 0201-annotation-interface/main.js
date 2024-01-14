"use strict";
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(+input.value);
}
function calcularGanho(total) {
    const ganho = total - total * 0.2;
    const p = document.querySelector("p");
    if (p) {
        p.innerHTML = `O valor com desconto é ${ganho}`;
    }
}
const totalMudou = () => {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(+input.value);
    }
};
if (input) {
    input.addEventListener("input", totalMudou);
}
