myarray = [1, 2, 3, 4];

const makeThisString = (x) => x.toString();
const sumTheStrings = (acumulador, itemAtual) => acumulador + itemAtual;

const myString = myArray.map(makeThisString).reduce(sumTheStrings);

console.log(myString);
