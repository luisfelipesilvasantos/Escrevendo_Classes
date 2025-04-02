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
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando ${ataque}.`);
    }
}

// Criando uma instância da classe
let ataque = new Heroi("Aragorn", 30, "Guerreiro");
let ataque1 = new Heroi("Gandalf", 20, "Mago");
let ataque2 = new Heroi("Tenzin", 33, "Monge");
let ataque3 = new Heroi("Hanzo", 23, "Ninja");

// Chamando o método atacar
ataque.atacar();
ataque1.atacar();
ataque2.atacar();
ataque3.atacar();
