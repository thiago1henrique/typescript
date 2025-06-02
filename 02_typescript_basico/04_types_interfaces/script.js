function preencherDadosTypes(dados) {
    document.body.innerHTML += "\n    <h2>Produto: ".concat(dados.nome, "</h2>\n    <h2>Valor: ").concat(dados.preco, "</h2>\n    <h2>Inclui teclado? ").concat(dados.teclado ? 'Sim' : 'Não', "</h2>\n    ");
}
var celular = {
    nome: 'Celular',
    preco: 1500,
    teclado: false
};
preencherDadosTypes({
    nome: 'Computador',
    preco: 5000,
    teclado: false
});
preencherDadosTypes({
    nome: 'Notebook',
    preco: 2500,
    teclado: true
});
preencherDadosTypes(celular);
function pintarCategoriaTypes(categoria) {
    if (categoria === 'design')
        console.log('pintar vermelho');
    else if (categoria === 'descod')
        console.log('pintar azul');
    else
        console.log('pintar verde');
}
pintarCategoriaTypes("design");
