let numbers = [1, 2, 3, 4, 5, 6];

let evens = Array.from(numbers, x => x%2 == 0); //cria um novo array a partir de um array existente.É possível passarmos uma função como parâmetro e retorna um array de acordo com a condição
console.log(evens); //números pares