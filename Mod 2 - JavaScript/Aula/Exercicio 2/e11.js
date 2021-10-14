const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//callback
const somar = (acumulador, atual) => acumulador + atual;

//implementation
const implementation = matrix.map((a, i) => a[i]).reduce(somar);

console.log(implementation);
