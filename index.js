class Heroi {
    constructor(nome, idade, tipo) {  
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataques = {
            "Guerreiro": "Espada",
            "Mago": "Magia",
            "Monge": "Artes Marciais",
            "Ninja": "Shuriken"
        };

        let ataque = ataques[this.tipo] || "um ataque desconhecido";
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

// Criando uma instância da classe
let ataque = new Heroi("Aragorn", 30, "Guerreiro");

// Chamando o método atacar
ataque.atacar();
