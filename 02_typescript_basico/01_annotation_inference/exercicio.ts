function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("         THIaGO                  "));

const input = document.querySelector('input');

const total = localStorage.getItem('total');

if(input && total) {
    input.value = total;
    calcularGanho(Number(input.value))
}

function calcularGanho(value: number) {
    const p = document.querySelector('p');
    if(p) p.innerText = `Ganho total ${value + 100 - value * 0.2}`
}

function totalMudou() {
    if(input) {
        const value = Number(Number(input.value));
        localStorage.setItem('total', String(value));
        calcularGanho(value);
    }
}

if(input) input.addEventListener('keyup', totalMudou)

//teste