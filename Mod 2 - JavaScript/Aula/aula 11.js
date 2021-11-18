// CLASSES

class Personcl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hi ${this.firstName}`);
  }
}

class Carro {
  constructor(marca, velocidade) {
    this.marca = marca;
    this.velocidade = velocidade;
  }

  acelarar(velocidade) {
    this.velocidade += 30;
    console.log(
      `você acelorou sua ${this.marca}! Sua velocidade é ${this.velocidade}km'h`
    );
  }

  frear(velocidade) {
    this.velocidade -= 10;
    console.log(
      `você freou sua ${this.marca}! Sua velocidade é ${this.velocidade}km'h`
    );
  }
}

const Galliardo = new Carro("Lambo", 100);

Galliardo.acelarar();
Galliardo.acelarar();
Galliardo.acelarar();
Galliardo.acelarar();

//HERANÇA COM FUNÇÃO CONSTRUTORA

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
  // Ajeitar isso daqui
  Student.prototype = Object.create(Person.prototype);
};

const danilo = new Student("danilo", 1990, "computação");
const closure = function
console.log(danilo);
console.log(danilo.calcAge);

const CarroEletrico =
