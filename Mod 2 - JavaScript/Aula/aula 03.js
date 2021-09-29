//Funcoes

function processadorFrutas(numMacas, numLaranjas) {
    console.log(numMacas, numLaranjas)
}

//nem toda função precisa receber parametro

//funcao de declaracao - é chamad
//funcao de expressao
//arrow function


const calcavg = (a, b, c) => (a + b + c) / 3;

const avgDolphins = calcavg(100, 230, 71);
const avgKoalas = calcavg (65, 64, 49);

console.log(avgDolphins);
console.log(avgKoalas);

const checkwinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins vencem com ${avgDolphins} vs. Koalas ${avgKoalas}`)
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas vencem com ${avgKoalas} vs. Dolphins ${avgDolphins}`)
    } else {
        console.log("ngm venceu")
    };
}

checkwinner(avgDolphins,avgKoalas)


//Arrays
//posso misturar os dados: int, boolean,string
//posso add um array dentro de um array
const friend1 ="Joao";
const friend2= "levi";
const friend3= "Matheus";

const friends = [friend1,friend2, friend3];
console.log(friends);

const primeiroNome = "igor";
const idade = 25;
const sobreMim =[primeiroNome,idade,friends]
sobreMim.push(65);
sobreMim.unshift("Miranda");
sobreMim.pop(); // exclui o ultimo elemtno
sobreMim.shift(); // exclui o primeiro elemento

console.log(sobreMim.indexOf("igor"));
console.log(sobreMim.length)

console.log(sobreMim)

// Steven ainda está construindo sua calculadora de gorjeta usando
// as mesmas regras de antes: Gorjeta de 15% da conta se o valor da conta for entre
// 50 e 300, e se o valor for diferente, a gorjeta é 20%.

// Escreva uma função 'calcGorjeta' que receba qualquer valor de conta como um input
// e retorne a gorjeta correspondente, calculada baseada nas regras acima
// (você pode checar o código da primeira calculadora de gorjeta se você precisar).
// Teste a função usando o valor de conta de 100.

// Agora vamos usar arrays! Crie um Array 'contas' contendo o dado de teste abaixo.
// Crie um array 'gorjetas' contendo o valor da gorjeta para cada conta,
// calculado pela função que você criou antes.

// BONUS: Crie um array 'total' contendo os valores total, a conta + gorjeta.
// TEST DATA: 125, 555 e 44.


const calcGorjeta = function(conta) {
return conta >= 50 && conta <= 300 ?  conta*0.15 : conta*0.20
}

// no if ternario o return vem na frente
// no outro 

const contas =[125,55,44];
const gorjetas = [
    calcGorjeta(contas[0]),
    calcGorjeta(contas[1]),
    calcGorjeta(contas[2]),
];
console.log(contas);
console.log(gorjetas);

const totais = [
    gorjetas[0] +contas[0],
    gorjetas[1]+contas[1],
    gorjetas[2]+contas[2],
];

console.log(totais);