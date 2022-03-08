// função construtora
function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const andre = new Cliente ('André', '1254359542', 'andre@email.com', 100); // objeto criado a partir da função construtora
console.log(andre);