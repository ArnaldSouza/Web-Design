/*A partir do objeto abaixo desconstrua-o criando as variáveis modelo e processador.
**Para descontruir use o exemplo let {idade, endereço{cidade}} = cliente
let dados={ marca:"HP", modelo:"V15", config:{memoria: 8, processador: "i7"}, entradas:[1,2,3]}*/

let dados = {
    marca: "HP",
    modelo: "V15",
    config: {
        memoria: 8,
        processador: "i7",
    },
    entradas: [1, 2, 3],
};

let { modelo, config: { processador } } = dados;

console.log(`Modelo: ${modelo}`);
console.log(`Processador: ${processador}`);

