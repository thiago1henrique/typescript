interface Produto {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Fabricante;
    empresaMontadora: Fabricante;
}

interface Fabricante {
    nome: string;
    fundacao: number;
    pais: string;
}

async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <p>${data.descricao}</p>
      <p>Garantia: ${data.garantia} anos</p>
      <p>Empresa fabricante: ${data.empresaFabricante.nome}</p>
      <p>Fundação: ${data.empresaFabricante.fundacao}</p>
      <p>País: ${data.empresaFabricante.pais}</p>
      <p>Empresa montadora: ${data.empresaMontadora.nome}</p>
      <p>Fundação: ${data.empresaMontadora.fundacao}</p>
      <p>País: ${data.empresaMontadora.pais}</p>
    </div>
  `;
}