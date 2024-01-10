const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.total);

const calcularGanho = (value) => {
    p.innerText = `
        ganho total: ${value + 100 - value * 0.2}
    `
}

const totalMudou = () => {
    const value = Number(input.value);
    localStorage.setItem('total', value);
    const p = document.querySelector('p');
    calcularGanho(value)

};
input.addEventListener('keyup', totalMudou);