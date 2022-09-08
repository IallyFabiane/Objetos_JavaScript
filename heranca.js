function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco += quantia
}

function Camiseta(nome, preco, cor) {
   Produto.call(this, nome, preco);
   this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //criando um objeto vazio e setando o seu prototype como o prototype de Produto
Camiseta.prototype.constructor = Camiseta; //evitando que o constructor de camiseta seja Produto

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100) )
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //será visível
        configurable: false, //não poderá ser reescrita ou deletada
        get: function () {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return; //o valor não será setado caso o tipo da variável valor seja diferente de número
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype); //criando um objeto vazio e setando o seu prototype como o prototype de Produto
Caneca.prototype.constructor = Caneca; //evitando que o constructor de camiseta seja Produto

const camiseta = new Camiseta('regata', 10, 'preta');
const caneca = new Caneca('star wars', 30, 'louça', 5);

camiseta.aumento(70);
caneca.estoque = 9; //utilizando o setter

console.log(caneca);
console.log(caneca.estoque); //utilizando o getter
console.log(camiseta);