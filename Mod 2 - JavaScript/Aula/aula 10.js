function Carro(velocidade, marca) {
  this.velocidade = velocidade;
  this.marca = marca;
  
}

function acelerar() {
  this.velocidade = velocidade + 10;
  console.log(velocidade);
}

Carro.prototype.frear() = function() {
  this.velocidade =- 05;
  console.log(`freando!! sua velocidade agora é ${velocidade}`);
};


function buzinar() {
  console.log("bi-bi!");
}

const Uno = new Carro(120, "Fiat");

Uno.frear();


// CLASSES

class Personcl{
  constructor(firstName,birthyear){
    this.firstName = firstName;
    this.birthyear = birthyear;
}
