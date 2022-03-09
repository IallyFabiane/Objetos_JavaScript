class Cliente {     //classes sempre com letra maiúscula
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) { //método para alterar as informações do saldo
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente ('André', 'andre@email.com', '112365984', 100); // criando uma instancia (objeto)

console.log(andre);
andre.exibirSaldo();