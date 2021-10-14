const topTrendingPrice = [
  150, 199.9, 300, 399.99, 1000, 1999.9, 2500, 100000, 0.5, 1,
];

const applyDiscount = function (price) {
  if (price < 200) {
    price = price * 0.95;
  } else if (price < 400) {
    price = price * 0.9;
  } else if (price < 2000) {
    price = price * 0.85;
  } else {
    price = price * 0.8;
  }
  return price.toFixed(2);
};

const priceWithDiscount = topTrendingPrice.map(applyDiscount);

console.log(priceWithDiscount);
console.log(topTrendingPrice.length);
