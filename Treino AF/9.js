/*Pegue o array Z do Exercício 8 e com o método MAP que retorne os valores multiplicados por 5
para a variável T. Exemplo: x= array.map(function(item, i){ return item * i})*/

let X = [15, 25];
let Y = [12, 15, 23, 43];;
let Z = [...X, ...Y]

let T = Z.map(function (item) {
    return item * 5;
});

console.log(T);