const nome = 'Ially Fabiane';

for ( let i in nome) { // no for...in preciso acessar o índice
    console.log(nome[i]);
}

console.log('-----------------');

for ( let i of nome) { // no for...of eu acesso os valores diretamente 
    console.log(i);
}

const pessoa = {
    nome: 'Ially',
    sobrenome: 'Silva'
};

console.log('-----------------');

for (let chave in pessoa) { // iterando sobre um objeto
    console.log(chave, pessoa[chave]);
};