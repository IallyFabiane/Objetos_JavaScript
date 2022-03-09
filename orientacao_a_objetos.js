const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${pessoa.nome}`)
    }
}
   
pessoa.imprimeNome(); //Ana

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
 const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
pessoa1.imprimeInfo(); //nome: Ana, email a@email.com
pessoa2.imprimeInfo(); //nome: Paula, email p@email.com

// função construtora recebendo os atributos do objeto através do this
 function Pessoa(nome, email){
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa3 = new Pessoa("Carla", "ca@email.com")
const pessoa4 = new Pessoa("Cristina", "cr@email.com")

pessoa3.imprimeNomeEmail(); // nome: Carla, email: ca@email.com
pessoa4.imprimeNomeEmail(); // nome: Cristina, email: cr@email.com