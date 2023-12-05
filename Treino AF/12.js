/*Mande pesquisar no array Z o valor 15. Se encontrar mostre o seu valor e o seu índice, se não
encontrar mostre a mensagem “Não encontrado valor”*/

let Z = [25, 12, 15, 23, 43];

let index = Z.indexOf(15);

if (index > -1) {
  console.log("Valor encontrado: ", Z[index]);
  console.log("Índice: ", index);
} else {
  console.log("Não encontrado valor");
}