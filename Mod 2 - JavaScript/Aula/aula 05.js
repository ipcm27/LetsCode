// 29/09/2021 - Quarta-feira
// MÉTODOS DE OBJETOS

const person = {
    firstName: "carlos",
    lastName: "Magno",
    birthYear: 2000,
    job: "professor",
    friends: ["Natalia", "Camila", "Pedro"],
    hasCarteiraMotorista: true,
    calcAge: function () {
        // console.log(this);
        return 2021 - this.birthYear;
    }, // qualquer função agregada a um objeto é chamada de método.
    printMsg: function () {
        return `${this.firstName} tem ${this.calcAge()} anos, é ${this.job} e ${this.hasCarteiraMotorista ? "possui": "não possui"} carteira de motorista `
    },
};

console.log(person.printMsg())

// DESAFIO

// Vamos voltar para Mark e John comparando seus IMCs! Dessa vez, vamos utilizar objetos para implementar os cálculos! Lembre: IMC = peso/(altura * altura). (peso em kg e altura em metros).

// 1. Para cada um deles, crie um objeto com propriedades para nomeCompleto, peso e altura (Mark Miller e John Smith).
// 2. Crie um método 'calcIMC' em cada objeto para calcular o IMC (o mesmo método nos dois objetos). Guarde o valor do IMC em uma propriedade, e também retorne ele no método.
// 3. Log no console quem tem o maior IMC, junto com o nomeCompleto e o respectivo IMC.
// Exemplo: "O IMC de John (28.3) é maior que o IMC de Mark (23.9)!"

// TEST DATA: Mark pesa 78kg e tem 1.69m de altura.
// John pesa 92kg e tem 1.95m de altura.

const mark = {
    nomeCompleto: "Mark Miller",
    peso: 78,
    altura: 1.69,
    calcImc: function () {
        this.imc = this.peso / this.altura ** 2
        return this.imc;
    },
}

const john = {
    nomeCompleto: "John Smith",
    peso: 92,
    altura: 1.95,
    calcImc: function () {
        this.imc = this.peso / this.altura ** 2
        return this.imc;
    },
}


john.calcImc();
mark.calcImc();
console.log(`o imc de Mark é ${mark.imc} e o de john ${john.imc}`)
console.log(`${john.imc}` > `${mark.imc}` ? `imc de ${john.nomeCompleto} é maior` : `imc de ${mark.nomeCompleto} é maior`)

// DESESTRUTURAÇÃO DE OBJETOS

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

const {
    name: restaurantName,
    location: lolo
} = restaurant;
console.log(restaurantName, lolo);
console.log(restaurant);
// nao substitui no objeto original. 

    //LOOP[S]

    const myArray = [
        "Michael",
        "Silva",
        2021 - 1993,
        "professora",
        ["Pedro", "Natalia", "Camila"],
        "michaelSilva@gmail.com",
      ];
      
      // console.log(myArray[0]);
    //   // console.log(myArray[1]);
    //   // console.log(myArray[2]);
    //   // console.log(myArray[3]);
    //   // console.log(myArray[4]);
    //   // console.log(myArray[5]);
      
    // //   for (let i = 0; i < myArray.length; i++) {
    // //     console.log(myArray[i], typeof myArray[i]);
    // //   }
      
    //   // Adicionar valores em um array usando loops:
      
    // //   const types = [];
      
    // //   for (let i = 0; i < myArray.length; i++) {
    // //     types.push(typeof myArray[i]);
    // //   }
      
    // //   console.log(types);
      
    //   // Exemplo:
      
    //   const birthYears = [1991, 2007, 1969, 2020];
    //   const ages = [];
      
    //   for (let i = 0; i < birthYears.length; i++) {
    //     ages.push(2021 - birthYears[i]);
      
    //     // 2021 - 1991 1 iteracao
    //     // 2021 - 2007 2 iteracao
    //     // 2021 - 1969 3 iteracao
    //     // 2021 - 2020 4 iteracao
    //   }
      
    //   console.log(ages);
      
    //   // CONTINUE E O BREAK
      
    //   // CONTINUE: VAI PARA A PRÓXIMA ITERAÇÃO
    //   // BREAK: SAI DO LOOP
      
    //   console.log("------- APENAS STRINGS -------");
      
    //   for (let i = 0; i < myArray.length; i++) {
    //     if (typeof myArray[i] !== "string") continue;
      
    //     console.log(myArray[i], typeof myArray[i]);
    //   }
      
    //   // BREAK
      
    //   console.log("----- BREAK COM NUMBER -----");
      
    //   for (let i = 0; i < myArray.length; i++) {
    //     if (typeof myArray[i] === "number") break;
      
    //     console.log(myArray[i], typeof myArray[i]);
    //   }
      
    //   // const myArray = [
    //   //   "MARTA",
    //   //   "ALBUQUERQ",
    //   //   2021 - 2003,
    //   //   "GEÓGRAFA",
    //   //   ["Pedro", "Natalia", "Camila"],
    //   //   "MYEMAIL@gmail.com",
    //   // ];
      
    //   // LOOP DE TRÁS PRA FRENTE
      
    //   // 0, 1, ... 4
    //   // 4, 3, ... 0
      
    //   for (let i = myArray.length - 1; i >= 0; i--) {
    //     console.log(i, myArray[i]);
    //   }
      
    //   // LOOPS DENTRO DE LOOPS
      
    // //   for (let exercicio = 1; exercicio < 4; exercicio++) {
    // //     console.log(`iniciando exercício ${exercicio}`);
      
    // //     for (let rep = 1; rep < 6; rep++) {
    // //       console.log(`Levantando pesos repetição ${rep}`);
    // //     }
    // //   }
      
    //   // LOOP WHILE
      
    //   let rep = 1;
    //   while (rep <= 10) {
    //     console.log(`Levantando pesos repetição ${rep}`);
    //     rep++;
    //   }
      
    //   let dado = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dado);
      
    //   while (dado !== 6) {
    //     console.log(`Você jogou o dado ${dado}`);
    //     dado = Math.trunc(Math.random() * 6) + 1;
      
    //     if (dado === 6) console.log("Loop irá finalizar...");
    //   }

    // DESAFIO

// Vamos melhorar a calculadora de gorjeta de Steven, dessa vez usando loops!
// 1. Crie um array 'contas' contendo todos os valores testes de conta;
// 2. Crie um array vazio para as gorjetas e os totais (gorjetas e totais)
// (um array para gorjetas e um array para totais)
// 3. Use a função 'calcGorjeta' que nós usamos anteriormente (não precisa repetir)
// para calcular as gorjetas e valores totais (conta + gorjeta)
// para cada valor de conta no array de contas.
// Use um loop for para fazer 10 cálculos.

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.

// DICA: Chame calcGorjeta no loop e use o método push
// para adicionar valores aos arrays de gorjeta e totais.

// 4. BONUS: Escreva uma função 'calcMedia' que receba um array chamado
// 'arr' como argumento.
// Essa função calcula a média de todos os números do array.
// 4.1 Chame a função com o array 'totais'.

const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const totais =[]
const gorjetas=[]

const calcGorjeta = function (conta) {
    return conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.2;
  };

  const calcFinal = function(){ 
      
  for (i=0;i<=contas.length;i++){
    const gorjeta = (calcGorjeta(contas[i]))
    gorjetas.push(gorjeta)
    totais.push(gorjeta + contas[i])
    return console.log(totais, gorjetas)
  }
  }

  calcFinal();