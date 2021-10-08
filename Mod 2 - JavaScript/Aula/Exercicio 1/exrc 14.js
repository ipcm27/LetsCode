const array = ["abacate", "a"]


const tornarMaisculaIgualLetra = function (array) {

    let frasePartida = array[0].split("");
    const arrayMaisculo = [];
    for (i = 0; i < frasePartida.length; i++) {

        if (frasePartida[i] == array[1]) {
            arrayMaisculo.push(frasePartida[i].toUpperCase())
        } else if (frasePartida[i] != array[1]) {
            arrayMaisculo.push(frasePartida[i])
        }

    }
   return console.log(arrayMaisculo)
}

tornarMaisculaIgualLetra(array)