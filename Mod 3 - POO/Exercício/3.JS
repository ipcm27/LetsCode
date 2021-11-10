class Account {
  #owner;
  #currency;
  #pin;
  #movements;
  #score;

  constructor(owner, currency, pin, score) {
    this.#owner = owner;
    this.#currency = currency;
    this.#pin = pin;
    this.#movements = [];
    this.#score = score;

    console.log(`Obrigada por abrir sua conta, ${owner}`);
  }

  get owner() {
    return this.#owner;
  }

  get currency() {
    return this.#currency;
  }

  set currency(currency) {
    this.#currency = currency;
  }

  get movements() {
    return this.#movements;
  }

  get score() {
    return this.#score;
  }

  ////   get pin() {
  ////     return this.#pin;
  ////   }

  resetPin(oldPin, NewPin) {
    if (oldPin == this.#pin) {
      this.#pin = NewPin;
      console.log("pin aletrado");
    } else {
      console.log("pin incorreto");
    }
  }

  deposit(val) {
    return this.#movements.push(val);
  }

  withdraw(val) {
    return this.deposit(-val);
  }

  #approveLoan(val) {
    conta02 = new Account("Igor", "usd", 1234, 10);
    if (this.#score < 5) {
      return false;
    } else if (this.#score >= 5 && val <= 10000) {
      return true;
    } else if (this.#score >= 8 && val <= 50000) {
      return true;
    } else {
      return false;
    }
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Emprestimo aprovado");
    } else {
      console.log("Emprestimo reprovado");
    }
  }
}

conta01 = new Account("Igor", "usd", 1234, 10);

// conta01.requestLoan(5000);
// conta01.deposit(10000);
// conta01.withdraw(2000);
// console.log(conta01.pin);
// conta01.resetPin(1234, 5566);
// console.log(conta01.pin);
// console.log(conta01.movements);

conta02.approveLoan(320);
