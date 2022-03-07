// objeto literal
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

// acesso por referência

const objPersonagem2 = objPersonagem;
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome); //Gandalf, o Cinzento
console.log(objPersonagem2.nome); //Gandalf, o Cinzento

//acesso por cópia (tipos primitivos)

let num = 50;
let num2 = num;

num2 = 100;
console.log(num); //50
console.log(num2); //100