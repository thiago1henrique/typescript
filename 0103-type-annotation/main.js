const produtos = [
    {
        nome: "O senhor dos Anéis",
        tipo: "livro",
    },
    {
        nome: "A guerra dos tronos",
        tipo: "livro",
    },
    {
        nome: "Dark souls",
        tipo: "jogo",
    }
];

const filtrarLivros = (dados) => {
    return dados.filter((item) => item.tipo === "livro");
}

console.log(filtrarLivros(produtos));