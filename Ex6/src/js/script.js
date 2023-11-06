var json = {
    "cardapio": {
        "lanches": [
            {
                "nome": "Hamburguer Clássico",
                "preco": 15.99,
                "componentes": ["Hamburguer, Queijo Cheddar, bacon, molho especial"]
            },
            {
                "nome": "Cheeseburguer Duplo",
                "preco": 25.99,
                "componentes": ["2 hamburgueres, Queijo Cheddar, Bacon, Molho exclusivo"]
            },
            {
                "nome": "Cheese Salada",
                "preco": 20.99,
                "componentes": ["Hamburguer, Queijo prato, Alface, Tomate, Cebola roxa, Molho exclusivo"]
            }
        ],
        "acompanhamentos": [
            {
                "nome": "Batata Frita",
                "preco": 15.99,
                "componentes": ["Batata Frita, Queijo Cheddar, Bacon"]
            },
            {
                "nome": "Onion Rings",
                "preco": 20.99,
                "componentes": ["Cebola Frita, Molho da casa"]
            },
            {
                "nome": "Nuggets",
                "preco": 15.99,
                "componentes": ["Nuggets, Molho Rose, Ketchup"]
            }
        ],
        "refrigerantes": [
            {
                "nome": "Coca-Cola",
                "preco": 5.90
            },
            {
                "nome": "Guarana",
                "preco": 5.90
            },
            {
                "nome": "Pepsi",
                "preco": 5.90
            }
        ]
    }
};

// Variáveis para rastrear os itens selecionados e os preços
var carrinho = [];
var totalCarrinho = 0.00;

function atualizarCarrinho() {
    var listaCarrinho = document.getElementById("itens-carrinho");
    var totalCarrinhoElement = document.getElementById("total-carrinho");

    // Limpa o carrinho atual
    listaCarrinho.innerHTML = "";
    totalCarrinho = 0.00;

    // Atualiza o carrinho com os itens selecionados
    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];
        var listItem = document.createElement("li");
        listItem.textContent = item.nome + " - R$" + item.preco.toFixed(2);
        listaCarrinho.appendChild(listItem);
        totalCarrinho += item.preco;
    }

    // Atualiza o total no carrinho
    totalCarrinhoElement.textContent = totalCarrinho.toFixed(2);

               document.getElementById("carrinho-itens-input").value = JSON.stringify(carrinho);
    document.getElementById("total-carrinho-input").value = totalCarrinho.toFixed(2);

}

function adicionarAoCarrinho(nome, preco) {
    
    var item = { nome: nome, preco: preco };
    carrinho.push(item);
    atualizarCarrinho();
}


// Funções para adicionar itens ao carrinho
function hambClassico() {
    adicionarAoCarrinho(json.cardapio.lanches[0].nome, json.cardapio.lanches[0].preco);
}

function hambSalada() {
    adicionarAoCarrinho(json.cardapio.lanches[2].nome, json.cardapio.lanches[2].preco);
}

function hambDuplo() {
    adicionarAoCarrinho(json.cardapio.lanches[1].nome, json.cardapio.lanches[1].preco);
}

function batata() {
    adicionarAoCarrinho(json.cardapio.acompanhamentos[0].nome, json.cardapio.acompanhamentos[0].preco);
}

function onion() {
    adicionarAoCarrinho(json.cardapio.acompanhamentos[1].nome, json.cardapio.acompanhamentos[1].preco);
}

function nugget() {
    adicionarAoCarrinho(json.cardapio.acompanhamentos[2].nome, json.cardapio.acompanhamentos[2].preco);
}

function coca() {
    adicionarAoCarrinho(json.cardapio.refrigerantes[0].nome, json.cardapio.refrigerantes[0].preco);
}

function guarana() {
    adicionarAoCarrinho(json.cardapio.refrigerantes[1].nome, json.cardapio.refrigerantes[1].preco);
}

function pepsi() {
    adicionarAoCarrinho(json.cardapio.refrigerantes[2].nome, json.cardapio.refrigerantes[2].preco);
}



//Funções para remover itens do carrinho
function removerUltimoItemDoCarrinho() {
    if (carrinho.length > 0) {
        carrinho.pop();
        atualizarCarrinho(); // Atualiza o carrinho após remover o item
    } else {
        console.log('O carrinho está vazio. Não é possível remover mais itens.');
    }
}