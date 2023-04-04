//objeto sem previsibilidade
let produto: object = {
  name: "Leonardo",
  cidade: "DF",
  idade: "37",
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome:"Tênis",
  preco: 89.99,
  unidades: 5,
};