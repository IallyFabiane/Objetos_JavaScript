let numbers = [1, 2, 3, 4, 5, 6, 7,8 , 9, 10, 11, 12, 13, 14, 15];
function compareNumbers(a, b) {
    if(a < b) {
        return -1; // quando  a - b = -1
    }  else if (a > b) {
        return 1; // quando a - b = 1
    } else {
        return 0; // quando a = b, a - b = 0
    }
}
numbers.sort(compareNumbers); //é necessário em um array de números, como nesse caso, adicionar uma função de comparação para retornar os valores na ordem correta, pois o método sort retorna os elemntos na ordem lexicográfica pressupondo que todos são strings!
console.log(numbers);