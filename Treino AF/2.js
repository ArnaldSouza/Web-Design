//Exiba o resultado da potência (Math.pow( ,) do x elevado a y por meio do console. O x e y 
//serão recebidos pelo window.prompt().

function calcularPotencia() {
    var x = parseInt(window.prompt("Digite o valor de x:"));
    var y = parseInt(window.prompt("Digite o valor de y:"));

    var resultado = Math.pow(x, y);

    console.log("O resultado de x^y é:", resultado);
}

calcularPotencia();
