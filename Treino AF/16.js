/* Crie um arrow function para o código a seguir:

const resultado = numeros.map( function (numero){
return numero * 5
}) */

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.map((numero) => numero * 5);
console.log(resultado);