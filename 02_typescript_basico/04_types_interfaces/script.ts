interface Produto {
    nome: string;
    preco: number;
    teclado: boolean;
}

function preencherDadosTypes(dados: Produto) {
    document.body.innerHTML += `
    <h2>Produto: ${dados.nome}</h2>
    <h2>Valor: ${dados.preco}</h2>
    <h2>Inclui teclado? ${dados.teclado ? 'Sim' : 'Não'}</h2>
    `
}

const celular: Produto = {
    nome: 'Celular',
    preco: 1500,
    teclado: false
}

preencherDadosTypes({
    nome: 'Computador',
    preco: 5000,
    teclado: false
})

preencherDadosTypes({
    nome: 'Notebook',
    preco: 2500,
    teclado: true
})

preencherDadosTypes(celular)

type Categoria = 'design' | 'código' | 'descod';
function pintarCategoriaTypes(categoria: Categoria) {
    if(categoria === 'design') console.log('pintar vermelho')
    else if(categoria === 'descod') console.log('pintar azul')
    else console.log('pintar verde')
}

pintarCategoriaTypes("design")