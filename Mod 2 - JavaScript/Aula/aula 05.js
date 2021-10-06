// const lista1 = [1,2,3]
// const lista2 = [4,5,6]

// let result=0;
//     for (i=0;i<lista1.length;i++){
//     result = result + (lista1[i]*lista2[i])

// }
// console.log(result)

// function reverseString(str){
//     let reversedString =" ";
//     for(let i = str.length - 1;i >= 0 ; i--){
//         reverseString= reversedString + str[i]
//     }
//     return reverseString
// }

// function fatorial(n){

//     for(let i=n;i>=1;i--){
//         fat = fat* i;
//     }
//     return fat;
// }
function printStar(int) {


    for (let i = 1; i < int.lenght; i++) {
        console.log("*")
    }
}

printStar(5)