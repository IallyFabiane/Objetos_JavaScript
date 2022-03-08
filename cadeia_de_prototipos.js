function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
      this.saldo += valor
    }
}
const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100);

// construtor que utiliza a função Cliente para gerar um novo tipo de cliente
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
   }
const eli = new ClientePoupanca("Eli", "12312312312", "eli@email.com", 100, 200);

// manipulando o comportamento do protótipo do objeto ClientePoupanca
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
   }

// cadeia de protótipos
console.log(andre.hasOwnProperty("saldoPoup"));
console.log(eli.hasOwnProperty("saldoPoup"));
console.log(andre instanceof Cliente);
console.log(typeof andre);
console.log(typeof eli);
console.log(eli instanceof ClientePoupanca);
console.log(Function.prototype.isPrototypeOf(Cliente));
console.log(Cliente.constructor === Function);