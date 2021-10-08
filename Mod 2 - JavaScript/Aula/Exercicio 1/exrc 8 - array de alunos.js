const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]


console.log("todos os dados da Luciana: ")
    for(i=0;i<alunos.length;i++){
        console.log(alunos[3][i])
    };
console.log()
    
console.log(" A idade da letícia: ");
console.log(alunos[1][1]);
console.log()

alunos[2][3]= "Data Science";
console.log("todos os dados do Pedro atualizados: ")
    for(i=0;i<alunos.length;i++){
        console.log(alunos[2][i])
    }  ;
