const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12365242625',
    email: 'andre@email.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`); //notação de ponto
console.log(cliente.cpf.substring(0, 3)); // substring para acessar do índice 0 até o índice 2