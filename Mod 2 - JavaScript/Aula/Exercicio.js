
//3
function calcularVolumePiscina(profundiade,largura,altura,alturalamina){
volumePiscinaEmM3 = ((profundiade-alturalamina)* (largura* altura));
volumePiscinaEmLitros = volumePiscinaEmM3*1000;
console.log(`A sua piscina tem ${volumePiscinaEmM3}m3 ou ${volumePiscinaEmLitros} litros`)
return volumePiscinaEmLitros;
}

function calcularProdutoLimpaPiscina(volumePiscinaEmLitros){
    qtdProdutoLimpaPiscina=(volumePiscinaEmLitros/1000)*0.0015
    
    console.log(`${qtdProdutoLimpaPiscina} litros do produto limpa piscina da estrela devem ser aplicados
    ou ${qtdProdutoLimpaPiscina*1000}ml do produto`) 

    return(qtdProdutoLimpaPiscina)
 
}

calcularVolumePiscina(1.7,3,5,0.5)
calcularProdutoLimpaPiscina(volumePiscinaEmLitros);

//4


1933

console.log('1' + 2 - 3 + '10' + '5' - 2 + 3);
console.log('1' + 2 - 3 + 10 + '5' - 2 + '3');
console.log('1'+ 1)
console.log('5'- 2 + '3')

const weekDays = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
    "domingo",
  ];

  console.log(weekDays[0])
  console.log(weekDays[6])
  console.log(weekDays.length)

const firstValue = weekDays.shift()
console.log(firstValue)


