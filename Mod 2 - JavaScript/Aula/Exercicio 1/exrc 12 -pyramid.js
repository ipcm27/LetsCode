const makePyramid = function (n) {
    if (n <= 20) {
        let string = ""
        for (let i = 1; i <= n; i++) {
            
            for (let j = 1; j <= n - i; j++) {
              string += " ";
            }
            
            for (let k = 0; k < 2 * i - 1; k++) {
              string += "*";
            }
            string += "\n";
          }
          console.log(string);
    } else {
        console.log("digite um numero entre 1 e 20")
    }

}


makePyramid(6)