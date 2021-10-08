// Aula 1 - 17/09 - 

// let javascript = "javascript é top";
// if (javascript === "javascript é top") alert("Javascript é mara");
// console.log(46+89+90);

//#Finajm que var nao existe. usem let ou const.
//let vale apenas para dentro do escopo



const pesoMark =78;
const alturaMark=1.69;
const pesoJohn =92;
const alturaJohn =1.95;

const imcMark = imc = pesoMark / alturaMark * alturaMark;
const imcJohn = imc = pesoJohn/ alturaJohn * alturaJohn;

const markMAiorImc = imcMark >imcJohn;

console.log(" o imc de Mark é " + imcMark); 
console.log(" o imc de John é " + imcJohn);
console.log(" O imcMark > imcJohn ? " + markMAiorImc);

//interpolaçao de Strings ou String template

let profissao ="programador";
let salario ="5.000";
let anoNascimento ="1996";
let idade="25";

const igorWithInterpolation =`sou igor, um ${profissao}. ganho ${salario}
\ nasci em ${anoNascimento} tenho ${idade} anos`;

console.log(igorWithInterpolation);
