let numbers = [1, 2, 3, 4, 5, 6];

let aKeys = numbers.keys(); //obtém um iterador de chaves do array (índices do array)
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next()); // quando não houver mais valores para iterar value recebe undefined e done recebe true

// ou ...

console.log('-----------------');

aKeys = numbers.keys();

for (let chave of aKeys) {
    console.log(chave);
}