// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar
    atacar() {
        let ataque = "";

        // Estrutura de decisão
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        // Saída final
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando objetos (heróis)
let heroi1 = new Heroi("Arthus", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 120, "mago");
let heroi3 = new Heroi("Lee", 40, "monge");
let heroi4 = new Heroi("Hanzo", 28, "ninja");

// Colocando em um laço de repetição
let herois = [heroi1, heroi2, heroi3, heroi4];

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}