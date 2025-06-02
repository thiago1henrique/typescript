function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("         THIaGO                  "));
var input = document.querySelector('input');
var total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    var p = document.querySelector('p');
    if (p)
        p.innerText = "Ganho total ".concat(value + 100 - value * 0.2);
}
function totalMudou() {
    if (input) {
        var value = Number(Number(input.value));
        localStorage.setItem('total', String(value));
        calcularGanho(value);
    }
}
if (input)
    input.addEventListener('keyup', totalMudou);
//teste
