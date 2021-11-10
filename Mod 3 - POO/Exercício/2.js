class Animal {
  constructor(nome, filo, habitat, pluricelular = "true") {
    this.nome = nome;
    this.filo = filo;
    this.habitat = habitat;
    this.pluricelualr = pluricelular;
  }

  emitirSom() {
    return console.log("Barulho genérico de animal");
  }

  brincar() {
    if (this.filo == "Mamífero") {
      console.log("brincar");
    } else {
      console.log("Eu não brinco");
    }
  }

  locomover() {
    console.log("andar,rastejar,nadar ou voar");
  }
}

class Dog extends Animal {
  constructor(nome, raça, filo = "mamífero", habitat = "terra") {
    super(nome, filo, habitat);
    this.raça = raça;
  }

  emitirSom() {
    return console.log("Au-Au");
  }

  brincar() {
    return console.log("Deitar,rolar e correr atrás da bola");
  }

  locomover() {
    return console.log("andar");
  }
}

class Cat extends Animal {
  constructor(nome, raça, filo = "mamífero", habitat = "terra") {
    super(nome, filo, habitat);
    this.raça = raça;
  }

  emitirSom() {
    return console.log("Miau");
  }

  brincar() {
    return console.log("Correr atrás do Piu-Piu");
  }

  locomover() {
    return console.log("andar");
  }
}

dog = new Dog("tintin", "fox terrier");

console.log(dog);
dog.emitirSom();
dog.brincar();
dog.locomover();

gato = new Cat("frajola", "American Shorthair");

console.log(gato);
gato.emitirSom();
gato.brincar();
gato.locomover();

// polimorfismo:
// É o ato de redefinir a assinatura de um método já existente na classe pai dentro de uma classe filha.
// Por exemplo, o método "emitirSom" da classe animal foi invocado pela classe filha "dog"
// porém com uma assinatura diferente
