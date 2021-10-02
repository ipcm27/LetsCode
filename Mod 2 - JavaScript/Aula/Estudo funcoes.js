var square = function (numero) {
    return numero * numero
};


console.log(`80 ao quadrado é ${square(80)}`)

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log(addSquares(2, 3))

const Carro = {
    marca : "volkswagen",
    ano : 1999,
   msg : {
    mensagem : `a marca do carro é ${Carro.marca} e o ano é ${Carro.ano}`,
    }
}

console.log(Carro.msg)