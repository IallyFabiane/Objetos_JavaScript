class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha() { // método estático
        console.log('Você deveria trocar a pilha do controle remoto');
    }
}

const controle1 = new ControleRemoto('SmartTv');
controle1.aumentarVolume();
ControleRemoto.trocaPilha(); //a cessando o método estático
console.log(controle1);