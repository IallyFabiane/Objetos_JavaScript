let numbers = [1, 2, 3, 4, 5, 6];

let aEntries = numbers.entries(); //obtém um iterador de chave/valor
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

// ou ...

console.log('-----------------');

aEntries = numbers.entries();

for (let par of aEntries) {
    console.log(par);
}