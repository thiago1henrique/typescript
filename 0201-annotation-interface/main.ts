let produto: string = "livro";
let preco: number = 100;

// produto = 300;
// preco = "300";

const carro: { marca: string; ano: number } = {
  marca: "Ford",
  ano: 2020,
};

const barato: boolean | string = preco < 400 ? true : "produto caro";

const somar = (a: number, b: number): number => a + b;
somar(4, 4);

const nintendo = {
  nome: "nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$" + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);

//exercicio 1
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

//exercicio 2

