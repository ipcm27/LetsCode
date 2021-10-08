const array = [1, 2, 3, 4, 5, 6]

const filtroPar = function (array) {
    let novoArray = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0) novoArray.push(array[i]);
    }
    return console.log(novoArray)
}

filtroPar(array)