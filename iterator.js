let numbers = [1, 2, 3, 4, 5, 6];

let iterator = numbers[Symbol.iterator]();
console.log('Iteração individual utilizando o método next(): ');
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//ou ....

console.log('-----------------')

iterator = numbers[Symbol.iterator]();

console.log('Iteração individual utilizando o laço for...of: ');

for (let value of iterator) {
    console.log(value);
}