//let permite que você declare variáveis limitando seu escopo no bloco, 
//instrução, ou em uma expressão na qual ela é usada. 
//Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, 
//independentemente do escopo de bloco.

const constancia ="constancia";
var variola ="variola";
let leticia= "leticia"
{
    {
        // constancia ="Magali"; erro
        variola ="Monica";
        leticia= "Cebolinha"

        console.log(variola);
        console.log(leticia);
        console.log(constancia);
        console.log("-----------")

        const capitaoAmerica = "Capitao America";
        var vingadores= "Vingadores";
        let linceNegra= "lince Negra;"
    }
}

variola ="mudei";
leticia ="mudei";
// constancia = "mudei" erro
// let leticia = "mudei"; erro

console.log(variola);
console.log(leticia);
console.log(constancia);
console.log("-----------")

//console.log(capitaoAmerica); erro - not defined
console.log(vingadores);
//console.log(linceNegra)erro - not defined

let a = 5;
const b = 10;
let c = 2;

a = 6;

const d = (a + b)/c;

console.log(d);