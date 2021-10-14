const Myarrays = [["1", "2", "3"], [true], [4, 5, 6]];

resultArray = [];

const breakingArrays = Myarrays.reduce(function (previousValue, currentValue) {
  return currentValue.map((a) => resultArray.push(a));
}, 0);
console.log(resultArray);

/**
 * Explanation: I have an array of arrays.The reduce can get each of the 3 items
 * and then return it to me, but i want to get the strings,boolean and number insde the 3 items.
 * So I get a Map and then make each of the elements be pushed to a new array, using the return of the reduce.
 */
