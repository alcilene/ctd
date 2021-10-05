const Aluno = require('./aluno') 
const alunos = require('./estudantes') 

let curso = {

    nomeDoCurso:"JavaScript",
    notaDeAprovacao: 7,
    faltasMaximas: 5,
    listaDeEstudantes: alunos,
    adicionarAluno(aluno){
        this.listaDeEstudantes.push(aluno)
    },
    aprovado(aluno){
        if(aluno.calcularMedia() >= this.notaDeAprovacao && aluno.quantidadeDeFaltas < this.faltasMaximas){
            return true;
        } else if(aluno.quantidadeDeFaltas === this.faltasMaximas && alunos.calcularMedia > this.notaDeAprovacao*0.1){
            return true;
        } else {
            return false;
        }
    },
    alunoAprovado(estudantes){
        let resultados = [];
        estudantes.forEach(estudante => {
            resultados.push(`Aluno ${estudante.nome} aprovado: ${this.aprovado(estudante)}`)
        });
        return resultados;
    }


}


console.log(curso.listaDeEstudantes)
// console.log(curso.aprovado(curso.listaDeEstudantes[1]))
console.log(curso.alunoAprovado(curso.listaDeEstudantes))





