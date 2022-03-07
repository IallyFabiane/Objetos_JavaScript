const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
// objPersonagem2 é uma instância diferente, podendo ser trabalhada de forma independente 
const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Gandalf, o Cinzento";
   
console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem2.nome); //Gandalf, o Cinzento