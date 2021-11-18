// maior = [4, 2, 3, 4, 9, 10];
// menor = [5, 2, 100];

// check qual é o array menor
// faz um map no array pequeno pro maior

const checarMaior = function (l1, l2) {
  maior = l1;
  maior = l2;
  if (l1.length > l2.length) {
    maior = l1;
    menor = l2;
  } else {
    maior = l2;
    menor = l1;
  }
  console.log(`[${maior}] esse é o maior`);
  console.log(`[${menor}] esse é o menor`);
};

const multplicarArray = function (maior, menor) {
  let resultado = [];
  for (i = 0; i < menor.length; i++) {
    resultado.push(menor[i] * maior[i]);
  }
  return console.log(resultado);
};

checarMaior([5, 7, 3], [2, 2]);
multplicarArray(maior, menor);

// solucao alcançada
// refatorar pra um código menor e usando o map
//11/10/2021 codigo refatorado eis a solucao (e2-1.js)

rr1 = [1, 2, 3];
arr2 = [9, 8, 5, 6];

const multiply2Arrays = (arr1, arr2) => {
  let smallerArray = arr1;
  let biggerArray = arr2;
  let resultadoArray = [];

  if (smallerArray.length > biggerArray.length) {
    biggerArray = arr1;
    smallerArray = arr2;
  } else {
    biggerArray = arr2;
    smallerArray = arr1;
  }

  smallerArray.reduce(function (acumulador, valorAtual, indice, array) {
    return resultadoArray.push(valorAtual * biggerArray[indice]);
  }, 10);
  return console.log(resultadoArray);
};

multiply2Arrays(arr1, arr2);
