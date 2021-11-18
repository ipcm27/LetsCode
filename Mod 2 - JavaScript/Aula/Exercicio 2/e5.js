x = [1, 2, 3, 4, 5, 6];

//creating a callback
const verifyBiggerThanFive = (x) => x > 5;

//implementing
const biggerThanFiveOnly = x.filter(verifyBiggerThanFive);

//ou
// funcao com o callback inline
const biggerThanFiveOnly2 = x.filter((x) => x > 5);

console.log(biggerThanFiveOnly2);
