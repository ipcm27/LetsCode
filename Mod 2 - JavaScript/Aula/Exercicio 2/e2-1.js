arr1 = [1, 2, 3];
arr2 = [9, 8, 5, 6];

const multiply2Arrays = (arr1, arr2) => {
  let smallerArray = arr1;
  let biggerArray = arr2;
  let resultArray = [];

  if (smallerArray.length > biggerArray.length) {
    biggerArray = arr1;
    smallerArray = arr2;
  } else {
    biggerArray = arr2;
    smallerArray = arr1;
  }

  smallerArray.reduce(function (previousValue, currentValue, index, array) {
    return resultArray.push(currentValue * biggerArray[index]);
  }, 10);
  return console.log(resultArray);
};

multiply2Arrays(arr1, arr2);
