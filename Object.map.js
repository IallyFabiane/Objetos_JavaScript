const pessoas = [
    {id: 3, nome: 'Maria' },
    {id: 2, nome: 'Ially'},
    {id: 1, nome: 'José'},
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);