const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
delete objPersonagem.aliado; // deletando a propriedade com notação de ponto
console.log(objPersonagem.aliado);
delete objPersonagem["status"]; // deletando a propriedade com notação de colchetes
console.log(objPersonagem.status);

const delProp = delete objPersonagem.aliado;
const delPropInexistente = delete objPersonagem["endereco"];
console.log(delProp); //true
console.log(delPropInexistente); //true