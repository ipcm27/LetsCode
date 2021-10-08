// 06/10 - quarta-feira
// AULA MAIS IMPORTANTE
// Recap aula 

// FUNCOES DE ALTA ORDEM
// 1. Funções que recebem outra funcáo como 
//  argumento
// 2. Funções que retornam uma outra função
// 3. Os dois juntos

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
//sai function , sai {}, sai return

greet2("hi")("Bitch")

// Funcoes JS de alta ordem - for Each, map, filter, reduce

const movimentação = [200, 300, -10, -1000]

for (const mov of movimentação) {
    if (mov > 0) {
        console.log(`voce depositou ${mov}`)
    } else {
        console.log(`voc6e sacou ${mov}`)
    }
}

movimentação.forEach(function (mov) {
    if (mov > 0) {
        console.log(`voce depositou ${mov}`)
    } else {
        console.log(`voc6e sacou ${mov}`)
    }
});

dogsJulia = [3, 5, 1, 12, 7]
dogsKate = [4, 1, 15, 8, 3]

const checkdogs = function (julia, kate) {
        const newJulia = julia;
        newJulia.splice(0, 1);
        newJulia.splice(-2)
        const newJuliaKate = newJulia.concat(kate)
        console.log(newJuliaKate)

        newJuliaKate.forEach(function (age, i) {
                if (age > 3) {
                    console.log(`o cão numero ${i+1} é adulto
                    e tem ${age} anos de idade`);
                } else if (age < 3) {
                    console.log(`o cão numero ${i+1} é um puppy
                    e tem ${age} anos de idade`);
                }
        });
    }
    checkdogs(dogsJulia, dogsKate)