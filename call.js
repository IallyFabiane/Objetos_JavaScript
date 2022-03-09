function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}
   
const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
   
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}
 //                   (objeto , parãmetro que imprimeNomeEmail deve receber)
imprimeNomeEmail.call(cliente1, "cliente especial"); // cliente especial - nome: Carlos, email: c@email.com
imprimeNomeEmail.call(cliente2, "cliente estudante"); // cliente estudante - nome: Fred, email: f@email.com