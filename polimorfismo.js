function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag./Conta: ${this.agencia} / ${this.conta} | ` +
     `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

function ContaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) { //sobrescrita do método sacar da classe-pai (polimorfismo)
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca (agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
  }
  ContaPoupanca.prototype = Object.create(Conta.prototype);
  ContaPoupanca.prototype.constructor = ContaPoupanca;
  
const conta1 = new Conta(11, 22, 10);
const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
conta1.depositar(11);
conta1.sacar(21);
console.log(conta1);

console.log();

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

