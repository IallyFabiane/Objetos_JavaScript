let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let number of numbers) {

    if (number === 2 || number === 4) {
        continue; //pula os números 2 e 4!
    }

    if (number === 7) {
        break; // interrompe o bloco de execução!
    }

    console.log(number);
}