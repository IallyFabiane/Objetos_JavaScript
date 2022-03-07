const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12365242625',
    email: 'andre@email.com',
    fones: ['55912345498', '5521988743124'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNascimento: '20/03/2011'
    } ,
    {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNascimento: '04/01/2014'
    }],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }
}
// this é uma palavra reservada que se refere a um objeto em contexto global ou estrito (uma função, por exemplo)
console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);