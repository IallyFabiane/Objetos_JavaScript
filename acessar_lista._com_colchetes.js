const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12365242625',
    email: 'andre@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']; // array com as chaves a serem acessadas
console.log(cliente[chaves[0]]); // notação de colchetes