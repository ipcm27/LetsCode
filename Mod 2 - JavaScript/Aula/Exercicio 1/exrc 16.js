const minhasTemp = [20, 30, 40, 0, -9]

const medirMaxMin = function (array) {
    let max = array[0];
    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        } else if (min > array[i]) {
            min = array[i]
        }
    }
    return console.log(`A maior temperatura do dia foi ${max} e a menor temperatura do dia foi ${min}`)

}

medirMaxMin(minhasTemp)
