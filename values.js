let numbers = [1, 2, 3, 4, 5, 6];

let aValues = numbers.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next()); // quando não houver mais valores para iterar value recebe undefined e done recebe true

// ou ...

console.log('-----------------------');

aValues = numbers.values();
for (let value of aValues) {
    console.log(value);
}