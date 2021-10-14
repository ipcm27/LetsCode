// Sexta-Feira - 09/10/2021 - Aula 09
//
// map, filter, reduce e programacao funcional

const movimentacao = [200, 450, -400, 3000, 650];

const movimentacaoReal = movimentacao.map(function (mov) {
  return mov * 5.49;
});

//implementaçao do map

const movimentacaoRealFOR = [];
for (const mov of movimentacao) {
  movimentacaoRealFOR.push(mov * 5.49);
}
console.log(movimentacaoRealFOR);

//transformando em arow

movimentacaorealArrow = movimentacao.map((mov) => mov * 5.49);

// segundo parametro do map

//const descricaoMovimentacao = movimentacao.map((mov, i) => `Movimentaçao ${i+1}: vocÊ ${ mov > 0 ? "depositou" : "sacou"} ${mov} reais`);

const account1 = {
  owner: "Hugo Porsche",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Miranda",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Pedro Silva",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Pereira",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

//desafio criar uma nova propriedade que o objeto tenha as iniciais de cada conta

const contas = [account1, account2, account3, account4];

const createUsernames = function (accs) {
  accs.forEach(function (acumulador) {
    acumulador.username = acumulador.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

console.log(createUsernames(contas));
console.log(contas);

//Filter

const movimentacao2 = [200, 100, 400, 500, -100, -500];

const depositos = movimentacao2.filter(function (mov) {
  return mov > 2;
});

//implementacao do filter

const depositosFor = [];
for (const mov of movimentacao2) {
  if (mov > 0) {
    depositosFor.push(mov);
  }
}

//DESAFIO: crie um array de saques

const saques = movimentacao2.filter(function (mov) {
  return mov < 0;
});

console.log(saques);

const saquesArrow = movimentacao.filter((mov) => mov < 0);

// REDUCE - Reduz as entradas a um

const saldo = movimentacao.reduce(function (acumulador, curr, i, arr) {
  return acumulador + curr;
}, 0);

console.log(saldo);

const saldoArrow = movimentacao.reduce(
  (acumulador, current) => acumulador + current
);

const nome = "Walisson Silva";

const nomeInitials = nome
  .split(" ")
  .reduce((initials, nome) => initials + nome[0], "");

console.log(nomeInitials);

//desafio
// transformar o array cachorro em Idade Humana
// calcuar a idade média dos caes  nos estudos

idadeCachorro = [5, 2, 4, 1, 15, 8, 3];
// const idadeHumana = idaide.cachorro.map((function(age))=> )
const idadeMedia = idadeCachorro.reduce(
  (acumulador, current, i, arr) => (acumulador + current) / arr.length,
  0
);

console.log(idadeMedia);

// Exemplo Complexo
const movimentos = [100, -1000, 200];
const totalizadores = movimentos.reduce(
  (acc, curr) => {
    return {
      totalNegativo: (acc.totalNegativo += curr < 0 ? curr : 0),
      totalPositivo: (acc.totalPositivo += curr > 0 ? curr : 0),
      totalGeral: (acc.totalGeral += curr),
    };
  },
  {
    totalNegativo: 0,
    totalPositivo: 0,
    totalGeral: 0,
  }
);
