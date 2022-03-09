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

// a palavra reservada extends significa herda
class ClientePoupanca extends Cliente {
    constructor (nome, email, cpf, saldo , saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}
const andre = new ClientePoupanca('André', 'a@email.com', '13325684879', 100, 200)
console.log(andre);
andre.depositar(50);
andre.depositarPoupanca(50);
console.log(andre);