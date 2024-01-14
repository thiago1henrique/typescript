"use strict";
// type numberOrString = string | number;
// let total: numberOrString = 20;
// total = 'vinte';
// type Produto = {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }
// const tablet: Produto = {
//     nome: 'samsung',
//     preco: 3000,
//     teclado: true
// }
// function preencherDados(dados: interfaceProduto) {
//     document.body.innerHTML += `
//         <div><h2>${dados.nome}</h2>
//         <p>${dados.preco}</p>
//         <p>Inclui teclado?${dados.teclado ? 'sim' : 'não'}</p>
//         </div>
//     `
// }
// preencherDados({
//     nome: 'Computador',
//     preco: 2000,
//     teclado: true
// })
// preencherDados({
//     nome: 'Notebook',
//     preco: 2500,
//     teclado: true
// })
// interface interfaceProduto {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
    <div>
        <h2>${data.nome}</h2>
        <h2>${data.preco}</h2>
        <p>${data.descricao}</p>
        <h2>${data.garantia} anos</h2>
    
    </div>
    `;
}
