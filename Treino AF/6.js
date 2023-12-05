/* let dados={ marca:"HP", modelo:"V15", config:{memoria: 8, processador: "i7"}, entradas:[1,2,3]}

Acrescente ao objeto acima uma função exibir() que mostrará pelo “alert” a marca e oprocessador do objeto, como: “O equipamento é um ……”. */

let dados = {
    marca: "HP",
    modelo: "V15",
    config: { memoria: 8, processador: "i7" },
    entradas: [1, 2, 3],
    exibir: function () {
        alert(`O equipamento é um ${this.marca} com processador ${this.config.processador}`);
    }
};

dados.exibir();
