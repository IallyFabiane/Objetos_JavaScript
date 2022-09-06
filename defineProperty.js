function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor atruibuído a propriedade é igual ao da instância
        writable: true, // é alterável
        configurable: false // não pode ser reconfigurado(apagado, por exemplo)
    })

    Object.freeze(this); //não é possível alterá-lo após instanciá-lo
}

const produto = new Produto('camiseta', 50, 3);
console.log(produto);
console.log(Object.keys(produto));
for (let chave in produto) {
    console.log(chave);
};