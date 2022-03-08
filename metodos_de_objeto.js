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

function oferecerSeguro(obj) {
   const Clientes = Object.keys(obj); 
    if (Clientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);

