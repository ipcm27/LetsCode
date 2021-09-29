//Desestruturação de array

//Operador Spread

const arr2= [7,8,9];
const badNewArray = [2,3,arr2[0],arr2[1], arr2[2]];
console.log(badNewArray);

const goodNewArray= [1,2,...arr2];

const menuRestaurante = ["macarrao", "sopa", "sushi", 'pao'];
const menuPizza = [...menuRestaurante, "Pizza"];
const menuSoma = [...menuPizza,...menuRestaurante];

console.log(menuSoma)

const str='larissa';

const letters= [...str, '', 'Q.'];
console.log(letters);


//aula4[spread,rest, slice, splice,concat,join,,reverse]

//Objetos

const person = {
    firstName: "Igor",
    lastName: "Pierre",
    birthyear: 1996,
    job: "student",
    friends: ["Natalia", "Camila", "Pedro"],
    hascarteiraMotorista: true,
    calcAge: function(){
        console.log(this);
        return 2021 -this.birthyear
    }


  };

  console.log(`${person.firstName} tem ${person.friends.length} amigos e seu melhor amigo é ${person.friends[0]}`)