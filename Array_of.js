let numbers = Array.of(1); // cria um novo array a partir dos argumentos passados para o método
console.log(numbers);
let numbers2 = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbers2);
let numbers3 = Array.of(...numbers2); //cópia do array existente utilizando operador de espalhamento(no método Array.fom, não precisaríamos desse operador)
console.log(numbers3);