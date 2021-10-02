//6

const frutas = ["Maçã", "Mamão", "Melão", "Banana"];
const vegetais = ["Cenoura", "Couve", "Brócolis", "Alface"];

const listarComidas = function (vegetais,frutas){

  //a
  const primeiroItemVegetal = vegetais.shift();
  //b
  const ultimoItemFrutas = frutas.pop();
  //c
  const primeiroIndexMamao =frutas.indexOf("Mamão");
  //d
  frutas.unshift(primeiroIndexMamao)
  //e
  const tamanhoFrutas =frutas.length;
  //f
  frutas.push(primeiroIndexMamao);
  //g
  const comidas = [...vegetais,...frutas];
  //h
  const melhoresComidas = comidas.splice(2,3)
  //i
  const maçaIndex = melhoresComidas.indexOf("Maçã"); 
  maçaIndex == -1 ? console.log("Maçã NÃO é uma das melhores comidas") : console.log("Maçã é uma das melhores comidas")
  //j
  const melhoresRevertido = melhoresComidas.reverse();
console.log(primeiroItemVegetal);
console.log(ultimoItemFrutas);
console.log(primeiroIndexMamao);
console.log(frutas);
console.log(tamanhoFrutas);
console.log(frutas);
console.log(comidas);
console.log(melhoresComidas);
console.log(maçaIndex)
console.log(melhoresRevertido)

//k
return melhoresComidas;
}

console.log(listarComidas(vegetais,frutas))