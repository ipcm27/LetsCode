//criacap da funcao que recebe o numero de linhas
const imprimirPascal = function (numeroLinhas) {
    //instanciacao do novo array de acordo com o numero de linhas
    let trianguloPascal = new Array(numeroLinhas);

    // criacao do for para contar o numero de linhas a serem criadas
    for (let i = 0; i < numeroLinhas; i++) {
        //instanciacao do novo array horizontal com q a quantidade de itens de uma linha
        let linha = new Array(i + 1);
        //atribuicao do 1 para o primeiro e ultimo item do array linha
        linha[0] = 1;
        linha[linha.length - 1] = 1;

        //criacao do for para contar os itens que vao entre o primeiro e o ultimo item do array, por isso j = 1 e j < linha.length - 1
        for (let j = 1; j < linha.length - 1; j++) {
            //instanciando a linha acima da linha de baixo através da "chamada"do array triangulo de pascal na posicao anterior
            let linhaAcima = trianguloPascal[i - 1];
            //para gerar os valores na posicao j (entre o primeiro e o ultimo item do array linha) eu vou sempre olhar para os valores de cima e somar os dois
            linha[j] = linhaAcima[j] + linhaAcima[j - 1]
        }
        //inserindo no triangulo de pascal (coluna) a linha
        trianguloPascal[i] = linha;

    }
    //retornando o resultado
    return console.log(trianguloPascal)
}

imprimirPascal(5)