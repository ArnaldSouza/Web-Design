const json = {
    "cardapio": {
        "lanches": [
            {
                "nome": "Hamburguer Clássico",
                "preco": 10.99,
                "componentes": ["Carne, Queijo, Alface, Tomate, Maionese"]
            },
            {
                "nome": "Sanduíche de Frango",
                "preco": 9.99,
                "componentes": ["Peito de Frango Grelhado, Alface, Tomate, Maionese"]
            },
            {
                "nome": "Cheeseburger",
                "preco": 11.49,
                "componentes": ["Carne, Queijo, Alface, Tomate, Cebola, Ketchup, Mostarda"]
            },
            {
                "nome": "Wrap de Vegetais",
                "preco": 8.99,
                "componentes": ["Tortilla de Trigo, Vegetais Frescos, Molho de Iogurte"]
            },
            {
                "nome": "Burrito de Carne",
                "preco": 12.99,
                "componentes": ["Tortilla de Trigo, Carne Moída, Feijão, Arroz, Queijo, Guacamole"]
            }
        ],
        "refrigerantes": [
            {
                "nome": "Coca-Cola",
                "preco": 2.49
            },
            {
                "nome": "Pepsi",
                "preco": 2.29
            },
            {
                "nome": "Sprite",
                "preco": 2.29
            },
            {
                "nome": "Fanta Laranja",
                "preco": 2.29
            },
            {
                "nome": "Água Mineral",
                "preco": 1.49
            }
        ]
    }
}
    ;

// Acessando os detalhes da Coca-Cola
const Pepsi = json.cardapio.refrigerantes.find(item => item.nome === "Pepsi");

if (Pepsi) {
    console.log("Detalhes da Pepsi:");
    console.log("Nome: " + Pepsi.nome);
    console.log("Preço: R$" + Pepsi.preco.toFixed(2));
} else {
    console.log("Pepsi não encontrada no cardápio.");
}