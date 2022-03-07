const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12365242625',
    email: 'andre@email.com',
    fones: ['55912345498', '5521988743124']
}
cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNascimento: '20/03/2011'
}
console.log(cliente);

cliente.dependentes.nome = 'Sara Silva'; // alterando um objeto dentro de um objeto
console.log(cliente);