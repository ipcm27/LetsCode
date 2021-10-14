function Carro(velocidade, marca) {
  this.velocidade = velocidade;
  this.marca = marca;
}

function acelerar() {
  this.velocidade = velocidade + 10;
  console.log(velocidade);
}

function frear() {
  Carro.velocidade = velocidade - 05;
  console.log(velocidade);
}

function buzinar() {
  console.log("bi-bi!");
}

const Uno = new Carro(0, "Fiat");
