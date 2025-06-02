const numeros = [10, 20, 30, 40, 50]

function maiorQue10(data: number[]) {
    return data.filter(item => item > 10)
}

console.log(maiorQue10(numeros));