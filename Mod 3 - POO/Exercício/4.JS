class User {
  #id;
  #nome;
  #senha;
  constructor(id, nome, senha) {
    this.#id = id;
    this.#nome = nome;
    this.#senha = senha;
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get senha() {
    return this.#senha;
  }

  login(id, senha) {
    if (this.#id == id && this.#senha == senha) {
      return console.log("login realziado com sucesso");
    } else {
      return console.log("id ou senha incorretos");
    }
  }
  modificarPesoAnimal(animal, novopeso) {
    return console.log(
      `O animal ${animal} teve seu peso modificada para ${novopeso} kg`
    );
  }
  modificarEspécieAnimal(animal, novaEspecie) {
    return console.log(
      `O animal ${animal} teve sua espécie modificada para ${novaEspecie}`
    );
  }
}

class Admin extends User {
  #telefone;
  constructor(id, nome, senha, telefone) {
    super(id, nome, senha);
    this.#telefone = telefone;
  }

  get telefone() {
    return this.#telefone;
  }

  adicionarAnimal(animal) {
    return console.log(`${animal} adicionado por ${this.nome}`);
  }
  excluirAnimal(animal) {
    return console.log(`${animal} exluido por ${this.nome}`);
  }
}
carlos = new User(1, "Carlos", 1234);
fernanda = new Admin(2, "Fernanda", 9191, 999554433);

console.log(fernanda.telefone);
console.log(fernanda.id);

fernanda.adicionarAnimal("jacaré da Somália");
fernanda.excluirAnimal("Macaco Albino");
fernanda.modificarEspécieAnimal("Morcego nadador", "Peixe");
carlos.modificarPesoAnimal("Porquinho-da-india", 12);

carlos.login(1, 1234);
fernanda.login(2, 1234);
