/* Crie um objeto novoEquip contendo os dados do objeto anterior mais as propriedades
valorVenda, qtdEstoque. Usar o operador Rest .... */
let dados = {
    marca: "HP",
    modelo: "V15",
    config: { memoria: 8, processador: "i7" },
    entradas: [1, 2, 3]
};
  


let novoEquip = {
    ...dados,
    valorvenda: 1500,
    qtdEstoque: 25
};

console.log(novoEquip);