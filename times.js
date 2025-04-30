function Time(time) {
    this.time = time;
}

function Posicao(time, posicao){
    this.posicao = posicao; 

    Time.call(this, time);
}

function Jogador(time, posicao, nome){
    this.nome = nome;

    Posicao.call(this, time, posicao);
}

const jogador1 = new Jogador("Palmeiras", "Meia", "Veiga");
const jogador2 = new Jogador("Palmeiras", "Zagueiro", "Gomes");
const jogador3 = new Jogador("Palmeiras", "Atacante", "Paulinho");


console.log(jogador1);
console.log(jogador2);
console.log(jogador3);



// function Jogador(esporte, time, nome) {
//     Times.call(this, esporte, time)
//     this.nome = nome;
// }

// function Posicao(esporte, time, nome, posicao) {
//     Jogador.call(this, esporte, time, nome)
//     this.posicao = posicao;
// }