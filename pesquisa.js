let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.indexOf(10)); // retorna o primeiro índice encontrado de acordo com o argumento passado como valor para o método
console.log(numbers.lastIndexOf(15)); // retorna o último índice encontrado de acordo com o argumento passado como valor para o método
console.log(numbers.find(element => element%13 == 0)); // retorna o primeiro valor do array que satisfaça a condição proposta
console.log(numbers.findIndex(element => element%13 == 0)); // retorna o primeiro índice do array que satisfaça a condição proposta