myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//callback
const verifyEven = (x) => x % 2 == 0;

//implementation
const filteredEvens = myNumbers.filter(verifyEven);

//ou
const filteredEven = myNumbers.filter((x) => x % 2 == 0);

console.log(filteredEven);
