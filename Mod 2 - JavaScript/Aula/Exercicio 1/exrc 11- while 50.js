const countSumBetweenNumberAndZero= function(number){
    if(number>50){
        let count =0;
        let sum=0;
        while(count != number){
            count++;
            sum += count;
            console.log(count)
            
        }
        console.log(sum)
    
    }

    else{"Digite um número maior que 50 para iniciarmos a contagem"}
}

countSumBetweenNumberAndZero(51)