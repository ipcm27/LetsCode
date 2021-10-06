array1 = [1, 2, 4, 5];
array2 = [4, 5, 6];

function intersection_destructive(a, b)
{
  var result = [];
  while( a.length > 0 && b.length > 0 )
  {  
     if      (a[0] < b[0] ){ a.shift(); }
     else if (a[0] > b[0] ){ b.shift(); }
     else /* they're equal */
     {
       result.push(a.shift());
       b.shift();
     }
  }

  return console.log(result);
}

intersection_destructive(array1,array2)

//encontrado com stack Overflow, mas eu entendi a resposta.


















// const interseçãoDeArrays = function (array1, array2) {
//     let count=0
//     let concat = array1.concat(array2);
//     concat.sort();
    
//     console.log(concat)

//     for (let i = 0; i < concat.length; i++) {
//         for (let j = 2; j < concat.length; j++)
//             if (concat[i] == concat[j]){
//                 console.log(concat[i])
//                 count++
                
//             }
//     }

//     console.log(count)
// }

// interseçãoDeArrays(array1, array2)



// const intersectionBetweenArrays = function (array1, array2) {


//     for (let i = 0; i <= array1.length; i++) {

//         const concat=[];
//         console.log(array1[i] === array2);


//         // if (array1.indexOf( array1[ i ]) == array2.indexOf(array1[ i ])) {
//         //     {
//         //         console.log("priting number")
//         //         push.concat(array1[i])
//         //         console.log("pushing number " + array1[i])
//         //     }
//             i++;
//         }
//         // console.log(concat.lenght)

//     }



// intersectionBetweenArrays(array1, array2);