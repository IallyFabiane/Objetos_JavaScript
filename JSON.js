//Para transferência de dados
/*
{
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    },
    {
      "id": 59,
      "titulo": "ECMAScript 6",
      "autor": "Diego Martins de Pinho",
      "categoria": "programação",
      "versoes": ["ebook"]
    },
    {
    "id": 39,
    "titulo": "Orientação a Objetos",
    "autor": "Thiago Leite",
    "categoria": "programação",
    "versoes": ["ebook", "impresso"]
    }
]} */

// convertendo objeto JavaScript para JSON
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   });
   
console.log(jsonLivro);

//convertendo JSON para objeto JavaScript
const objLivro = JSON.parse(jsonLivro);
console.log(objLivro);