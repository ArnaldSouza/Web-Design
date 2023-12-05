/* Use o array Z da questão 8 e usando o método reduce() mostre a soma de todos os
elementos (return total+idade)*/

let X = [15, 25];
let Y = [12, 15, 23, 43];;
let Z = [...X, ...Y]

let soma = Z.reduce(function (total, elemento) {
    return total + elemento;
}, 0);

console.log("A soma de todos os elementos é: " + soma);
