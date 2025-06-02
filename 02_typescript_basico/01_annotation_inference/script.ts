let produto: string = "Livro";
const preco_v2: number = 200;

const carro: {
    marca: string,
    portas: number,
} = {
    marca: "audi",
    portas: 5
}

//inferencia
const dia = 13;

const barato: boolean | string = preco_v2 < 400 ? true : "Produto caro";

const somarCalculo = (a: number, b: number): number => a + b;
console.log(somarCalculo(1, 2));

const nintendo = {
    nome: 'Nintendo',
    preco_v2: "2000"
}

const transformarPreco = (produto: {nome: string, preco_v2: string}) => {
    produto.preco_v2 = 'R$ ' + produto.preco_v2;
    return produto;
}

const produtoUm = transformarPreco(nintendo);
console.log(produtoUm);
