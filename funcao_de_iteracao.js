function isEven(x) {
    console.log(x);
    return x % 2 === 0 ? true : false;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


//every itera pelos elementos do array até que a função devolva false!
numbers.every(isEven); //o primeiro número do array é 1 então não é múltiplo de 2, logo isEven retorna false ao encontrar numbers[0]

//some itera pelos elementos do array até que a função devolva true!
numbers.some(isEven);//o segundo número do array é 2 então é múltiplo de 2, logo some retorna true ao encontrar numbers[1]

numbers.forEach(x => console.log(x % 2 === 0));//itera sobre todos os elementos do array checando se são múltiplos de 2 ou não e retorna true pou false

const myMap = numbers.map(isEven);
console.log(myMap); // retorna um array contendo os valores resultado da checagem da função isEven a partir da função map

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // retorna um novo array contendo os valores que retornaram true de acordo com a condição expressa na função isEven