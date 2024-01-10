"use strict";
let produto = "livro";
let preco = 100;
// produto = 300;
// preco = "300";
const carro = {
    marca: "Ford",
    ano: 2020,
};
const barato = preco < 400 ? true : "produto caro";
const somar = (a, b) => a + b;
somar(4, 4);
const nintendo = {
    nome: "nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
//exercicio 1
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
//exercicio 2
