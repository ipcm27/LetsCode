// DESESTRUTURAÇÃO DE ARRAYS

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x);
console.log(y);
console.log(z);

console.log(arr); // array original não muda.

// OPERADOR SPREAD

const arr2 = [7, 8, 9];
const badNewArray = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArray);

const newArray = [1, ...arr2, 3];
console.log(newArray);

console.log(...newArray);

const menuRestaurante = ["Macarrao", "Sopa", "Sushi", "Pao"];
console.log(menuRestaurante);

const newMenu = [...menuRestaurante, "Pizza"];
console.log(newMenu);

console.log(...newMenu);
console.log([...newMenu]);

// PARÂMETRO REST E O PADRÃO REST

// SPREAD, pq está no lado direito do =
const arr3 = [1, 2, ...[3, 4]];

// REST, pq está no lado esquerdo do =
const [g, h, ...outros] = ["batata","alface",7,8,9,10];
console.log(outros);

// ELEMENTO REST PRECISA SER O ÚLTIMO



const add = (...numeros) => console.log(numeros);

add(2, 3);
add(2, 3, 4, 5, 6);
add("lalala", "ererrere", "usgfusdfbsdf");

// MÉTODOS DE ARRAY

// SLICE
let arr4 = ["a", "b", "c", "d", "e"];

console.log(arr4.slice(2));
const o = arr4.slice(2);
console.log(o);

console.log(arr4.slice(2, 4));

//pega o último
console.log(arr4.slice(-1));

console.log(arr4.slice(-2));

//pega do 1 até o penúltimo
console.log(arr4.slice(1, -2));

console.log(arr4.slice());
console.log([...arr4]);

console.log(arr4);

// SPLICE - MUDA O ARRAY ORIGINAL!!!!!
// slice nao
// console.log(arr4.splice(2));

// console.log(arr4);

// arr4.splice(-1);
// console.log(arr4);

const u = arr4.splice(1, 2);
console.log(u);

console.log(arr4);

// REVERSE -  MUDA O ARRAY ORIGINAL!!!!
arr4 = ["a", "b", "c", "d", "e"];
const arr5 = ["j", "i", "h", "g", "f"];
console.log(arr5.reverse());
console.log(arr5);

// CONCAT

const letras = arr4.concat(arr5);
console.log(letras);
console.log([...arr4, ...arr5]);

// JOIN

console.log(letras.join(" * "));


//aula4[spread,rest, slice, splice,concat,join,,reverse]

//Objetos

const person = {
    firstName: "Igor",
    lastName: "Pierre",
    birthyear: 1996,
    job: "student",
    friends: ["Levi", "Matheus", "Joao"],
    hascarteiraMotorista: true,
    calcAge: function(){
        console.log(this);
        return 2021 -this.birthyear
    }


  };

  console.log(`${person.firstName} tem ${person.friends.length} amigos e seu melhor amigo é ${person.friends[2]}`)


// MÉTODOS DE OBJETOS

const larissaObj = {
    firstName: "Larissa",
    lastName: "Queiroz",
    birthYear: 1993,
    job: "professora",
    friends: ["Natalia", "Camila", "Pedro"],
    hasCarteiraMotorista: true,
    calcAge: function () {
      // console.log(this);
      return 2021 - this.birthYear;
    }, // qualquer função agregada a um objeto é chamada de método.
  };
  
  console.log(larissaObj.calcAge());
  larissaObj.calcAge();
  larissaObj.calcAge();
  larissaObj.calcAge();