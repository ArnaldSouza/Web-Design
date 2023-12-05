/*
Use o objeto da 4 e exiba numa mensagem a marca, o processador e o segundo conteúdo do
array
*/
let dados = {
    marca: "HP",
    modelo: "V15",
    config: {
        memoria: 8,
        processador: "i7",
    },
    entradas: [1, 2, 3],
};


let segundoElemento = dados.entradas[1];
let { marca, config: { processador } } = dados;

console.log(`A marca do equipamento é: ${marca}, com um processador ${processador}, com ${segundoElemento} entradas`);