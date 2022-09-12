class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const pessoa = new Pessoa('Ially', 'Silva');
pessoa.falar();
console.log(pessoa);