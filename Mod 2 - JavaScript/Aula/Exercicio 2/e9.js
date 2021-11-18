const products = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

//calback
const price = (acumulador, atual) => acumulador + atual;
const resultado = ` U$ ${products
  .map((a) => a.price)
  .reduce(price)
  .toLocaleString("Us", { style: "currency", currency: "USD" })}`;

console.log(resultado);
