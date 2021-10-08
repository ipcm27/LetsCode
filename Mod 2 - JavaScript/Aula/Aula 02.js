// INTERPOLAÇÃO DE STRING

const myInterpolation = `Sou ${primeiroNome}, uma ${profissao} de ${
    anoAtual - anoNascimento
  } anos.`;
  
  console.log(myInterpolation);

//condicionais

const pesoMark =78;
const alturaMark=1.69;
const pesoJohn =92;
const alturaJohn =1.95;

const imcMark = imc = pesoMark / (alturaMark * alturaMark);
const imcJohn = imc = pesoJohn/ (alturaJohn * alturaJohn);

if (imcMark >imcJohn){
    console.log(`o imc de mark é maior ${imcMark.toFixed(1)}`)
}
else{
    console.log(`o imc de John é maior ${imcJohn.toFixed(1)} do que o de Mark ${imcMark.toFixed(1)}`)
}

//conversão de tipos e coerção de tipos

// Conversão de Tipo: quando nós manualmente convertemos de um tipo para o outro
// coerçao de tipo: qnd o Javascript converte por trás dos panos

const inputYear = "1991";
console.log(inputYear + 18)

//Conversão de Tipos
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(imcMark.toFixed(1)));

//Coerção de tipos
console.log("Eu tenho" + 18 + "anos"); // força o 18 a virar string
console.log('10'+ 3);// forca o 10 a virar number

//Valores Truthy e Falsy
// 5 valores falsy: 0, '',undefined,,null,NaN

const dinheiro = 0;

if (dinheiro){
    console.log("Oba! eu tenho dinheiro!");
}
else{
    console.log("to liso");
}

//operadores de igualdade == vs ===

const age2=18;
if(age2 ===18) console.log("Você virou adulto (strict) ");

// ===compara valor e tipo
// == compara só o valor

//prompt

//const numFavorito = Number(propmpt("qual seu numero favorito "));

//operadores lógicos

//& and || ou

// Existem dois times de ginástica, Dolphins e Koalas. 
// Eles competem um contra o outro 3 vezes. O vencedeor com a maior 
// média de pontos ganha o troféu.

// Calcule a média de pontos para cada time usando os dados de teste abaixo:
// Compare a média dos scores dos times para determinar 
// o vencedor da competição, e mostre no console. 
// Não esqueça que pode existir um empate, então teste esse caso também.

// TEST DATA: Score dos Dolphins 96, 108 e 89. Koalas score 88, 91 e 110.

// BONUS 1: Adicione um requisito para um score mínimo de 100. 
// Com essa regra, um time só ganha se ele tiver um score maior 
// que o outro time, e ao mesmo tempo um score de pelo menos 100 pontos.

// BONUS 2: Score mínimo também se aplica ao empate! 
// Então o empate só acontece se os dois tiverem o mesmo score e 
// também os dois tiverem score maior ou igual a 100 pontos, 
// senão, nenhum time ganha o troféu.

// TEST DATA BONUS 1: Dolphins score 97, 112 e 101. Koalas score 109, 95 e 123.
// TEST DATA BONUS 2: Dolphins score 97, 112 e 101. Koalas score 109, 95 e 106.

let mediaDolphinsTeste1 = (97+112+101)/3
let mediaKoalasTeste1 = (109+95+123)/3

let mediaDolphinsTeste2 = (97+112+101)/3
let mediaKoalasTeste2 = (109+95+106)/3



console.log("Os pontos do Koala " + mediaKoalasTeste1)
console.log("Os pontos do dolphin " + mediaDolphinsTeste1)
if(mediaDolphinsTeste1 > mediaKoalasTeste1 && mediaDolphinsTeste1>=100 ){console.log("Dolphins campeoes")}
else if(mediaDolphinsTeste1 < mediaKoalasTeste1 && mediaKoalasTeste1>=100 ){console.log("Koalas campeoes")}
else if(mediaDolphinsTeste1 === mediaKoalasTeste1 && mediaDolphinsTeste1>=100 && mediaKoalasTeste1>=100){console.log("empatou")}
else{console.log("ngm eh campeao")}

console.log("Os pontos do Koala " + mediaKoalasTeste2)
console.log("Os pontos do dolphin " + mediaDolphinsTeste2)
if(mediaDolphinsTeste2 > mediaKoalasTeste2 ){console.log("Dolphins campeoes")}
else if(mediaDolphinsTeste2 < mediaKoalasTeste2 ){console.log("Koalas campeoes")}
else if(mediaDolphinsTeste2 === mediaKoalasTeste2 && mediaDolphinsTeste2>100 && mediaKoalasTeste2>100){console.log("empatou")}
else{console.log("ngm eh campeao")}

//Switch

//exemplo dia da semana

// Declarações e expressões
// expressões (3+4, 1993, true && false) - produz um valor - String é uma expressão;
// declarações console.log("Hello World");

console.log(`tenho ${2021-1996} anos e ${12} meses`);
// acima está evidenciado a importância de expressão x declaração. alguns lugares só pode ser uma expressão. 


//Ternário

const myage=15;
possuiCNH = false;

myage >= 18 ? console.log("posso dirigir") : console.log("Vou de carona");
possuiCNH = true ? console.log("vou pilotando") : console.log("vou de busão");

const drive = myage>18? "drigir":"carona";
console.log(drive);

//calculadora
// 15% if conta > 50 e <300
// else 20%;

const conta=500;
let gorjeta=0;
conta >= 50 && conta <= 300 ? console.log( `valor da gorjeta = ${gorjeta = conta*0.15} / valor da conta + gorjeta  ${gorjeta+conta}`) : 
console.log( `valor da gorjeta = ${gorjeta = conta*0.20} / valor da conta + gorjeta  ${gorjeta+conta}`);