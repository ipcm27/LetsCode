const checkHighStudents = function(average){

if (average >= 9 && average > 0 && average < 10.1) {
    console.log("Parabéns - você está na lista de alunos destaque do curso!")
}
else{console.log("Desculpe, você não entrou na lista de alunos destaque")}

}

console.log(checkHighStudents(100))