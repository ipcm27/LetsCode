// 04/10 - Segunda-feira - doente, aula nao assistida
// JAVASCRIPT POR DEBAIXO DOS PANOS

// 1. SCOPE

// GLOBAL SCOPE

const eu = "Larissa";
const profissao = "professora";
const anoNascimento = 1993;

// FUNCTION SCOPE
// variáveis declaradas dentro do escopo da funcao não podem ser acessadas fora dele

function calcAge(birthYear) {
  const now = 2021;
  const age = now - birthYear;
  return age;
}

// console.log(now);

// BLOCK SCOPE
// variáveis declaradas dentro do escopo da funcao não podem ser acessadas fora dele

if (anoNascimento >= 1993 && anoNascimento < 2021) {
  const x = true;
  const nome = "Larissa";
} // block if, for loop while

// console.log(x);

// 2. HOISTING

// Hoisting com variáveis

// Não posso acessar as seguintes variáveis pois elas nao foram inicialiazadas
// com exceção do "me", pois ele é do tipo var. Entretanto, ele acessa o var, mas nao o valor. ficando undefined
// console.log(me); 
// console.log(job);
// console.log(year);

var me = "Larissa";
let job = "professora";
const year = 1993;

console.log(me);

// Hoisting com funcoes
// Não posso acessar as funcoes antes da inicialização.

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExpression2 = function (a, b) {
  return a + b;
};