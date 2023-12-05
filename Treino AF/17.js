/* Crie uma função normal para o código a seguir:

let mapIdInd = idades.map( (idade,index)=> {
if (idade > 10)
return index */

const idades = [5, 15, 8, 12, 20];
function mapIdInd(idade, index) {
    if (idade > 10) {
        return index;

    }
}

let resultado = idades.map(mapIdInd);
resultado = resultado.filter(valor => valor !== undefined);
console.log(resultado);