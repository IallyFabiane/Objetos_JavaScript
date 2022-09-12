class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const pessoa = new Pessoa('Ially', 'Silva');
pessoa.falar();
pessoa.nomeCompleto = 'Ially Fabiane'; //setter
console.log(pessoa); //objeto instanciado
console.log(pessoa.nomeCompleto); //getter