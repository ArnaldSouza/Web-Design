function obterParametrosURL() {
    var queryString = window.location.search.substring(1);
    var pares = queryString.split("&");
    var parametros = {};
    for (var i = 0; i < pares.length; i++) {
        var split = pares[i].split("=");
        var chave = decodeURIComponent(split[0]);
        var valor = decodeURIComponent(split[1]);
        parametros[chave] = valor;
    }
    return parametros;
}

// Função para exibir os detalhes do pedido na página
function exibirDetalhesDoPedido() {
    var parametros = obterParametrosURL();
    var carrinhoItens = JSON.parse(parametros["carrinho-itens"]);
    var totalCarrinho = parametros["total-carrinho"];

    var listaDetalhes = document.getElementById("resumo-itens");
    var totalElement = document.getElementById("resumo-total");

    carrinhoItens.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item.nome;
        listaDetalhes.appendChild(li);
    });

    totalElement.textContent = " R$" + totalCarrinho;
}

window.addEventListener("load", exibirDetalhesDoPedido);
