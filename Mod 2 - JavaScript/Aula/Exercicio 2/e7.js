movies = ["Sherk", "Harry Potter", "007", "American Beauty"];

//callback
const lessThan5letters = (x) => {
  let split = x.split("");
  if (split.length <= 5) {
    return split;
  }
  split.join();
};

console.log(movies.filter(lessThan5letters));
