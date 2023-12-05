/*Faça um código que:
a) Crie o array X contendo os valores 15 e 25 e o array Y com os valores 12,15,23,43.
b) Exiba os valores de y acrescentando um “-“ entre entres. Use o join(“ ”)
c) Crie o array Z contendo os valores do array X e Y.
d) Faça uma estrutura de repetição com o FOR IN que percorra todos os elementos do array Z.
Essa estrutura deve pegar cada elemento e multiplicar por 5 e depois exibir o resultado por
meio de uma lista usando o document.write(`<li> ${} <br>`)
*/

let X = [15, 25];
let Y = [12, 15, 23, 43];

let valoresYhifen = Y.join(" - ");
let Z = [...X, ...Y]

console.log(valoresYhifen);
console.log(Z);

for (let indice in Z) {
    let resultado = Z[indice] * 5;
    console.log(resultado);
    //document.write(`<li>${resultado}</li><br>`);
}
