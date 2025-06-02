class Produto {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

const Livro = new Produto('A guerra dos tronos');
console.log(Livro.nome);
console.log(Livro.preco);
//console.log(Livro instanceof Array);
//console.log(Livro instanceof Produto);

class LivroV2 extends Produto{
    autor: string;
    constructor(nome: string, autor: string) {
        super(nome);
        this.autor = autor;
    }
}

class JogoV2 extends Produto{
    jogadoresV2: number;
    constructor(nome: string, jogadoresV2: number) {
        super(nome);
        this.jogadoresV2 = jogadoresV2;
    }
}

function buscarProduto(busca: string) {
    if(busca === 'O Hobbit') return new LivroV2('O Hobbit','J. R. R. Tolkien');
    if(busca === 'Dark Souls') return new JogoV2('Dark Souls',1);
    return null;
}

let produtoV2 = buscarProduto('O Hobbit');
if(produtoV2 instanceof LivroV2) console.log(produtoV2.nome);

produtoV2 = buscarProduto('Dark Souls');
if(produtoV2 instanceof JogoV2) console.log(produtoV2.nome);