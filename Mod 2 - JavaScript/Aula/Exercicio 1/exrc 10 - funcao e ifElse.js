const chooseActivitie = function (temp) {


    if (temp >= 26) {
        console.log("natação");
    } else if (temp >= 15 && temp < 26) {
        console.log("Tênis");
    } else if (temp >= 5 && temp < 15) {
        console.log("Golfe");
    } else if (temp < 5) {
        console.log("esqui");
    }


}



console.log(chooseActivitie(4.98))