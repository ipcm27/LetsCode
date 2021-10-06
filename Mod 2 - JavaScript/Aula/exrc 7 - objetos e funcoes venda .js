const venda = {
  produto: "ventilador",
  marca: "Arno",
  loja: "Amazon",
  quantidade: 5,
  preco: 500,
  hasDesconto: function () {
    if (venda.preco > 450) {
      return true
    } else {
      return false
    }
  },
  calcularValorFinal: function () {
    if (venda.hasDesconto = true) {
      // se eu botasse o == aqui nao funcionava, nao sei pq
      newPreco = venda.preco * 0.9
      return newPreco;
    } else {
      return venda.preco
    }

  },

  //msg: `[${loja}] - [${this.produto} ${this.marca}] - [${this.quantidade}] -[valor total de venda = ${venda.calcularValorFinal(this.preco)}]`
  // queria ter atribuido uma mensagem no corpo do objeto par nao ter que precisar imrpimir todo o texto que está sendo impresso no console.log final, mas nao consegui.
}

// console.log(msg)
console.log(`[${venda.loja}] - [${venda.produto} ${venda.marca}] - [${venda.quantidade}] -[valor total de venda = ${venda.calcularValorFinal(venda.preco)}]`)

// essa questão foi a que eu mais tive dificuldade. Nao entendi muito bem como fica uma funcao dentro de um objeto assim.
// se fosse num site do Mercado livre, por exemplo, cada item a ser vendido carrega em si um objeto com todos os atributos e funcoes ? é isso? 
// Nào seria mais fácil colcoar somente os atributos e as funcoes em uma outra classe ?
// ficou um pouco obscuro pra mim isso, mas acho que entederei melhor em javascript OO.