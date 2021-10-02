//7

const venda = {
    produto: "ventilador",
    marca: "Arno",
    loja: "Amazon",
    quantidade: 5,
    preco: 500,
    hasDesconto: function () {
      if (this.preco > 450) {
        return true
      } else {
        return false
      }
    },
    calcularValorFinal: function (preco) {
      if (this.hasDesconto == true) {
        newPreco = this.preco * 0.9
        return newPreco;
      } else {
        return preco
      }
  
    },
    
     msg : `[${this.loja}] - [${this.produto} ${this.marca}] - [${this.quantidade}] -[valor total de venda = ${this.calcularValorFinal(this.preco)}]`
  
  }
  
  //console.log(`[${venda.loja}] - [${venda.produto} ${venda.marca}] - [${venda.quantidade}] -[valor total de venda = ${venda.calcularValorFinal(venda.preco)}]`)
  console.log(msg)
  
  