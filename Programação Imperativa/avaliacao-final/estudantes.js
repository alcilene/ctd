let Aluno = require('./aluno') 
    
let aluno01 = new Aluno("João", 6, [7, 8, 9])
let aluno02 = new Aluno("Maria", 5, [8, 8, 7])
let aluno03 = new Aluno("Alberto", 4, [5, 8, 7])
let aluno04 = new Aluno("Fernanda", 3, [9, 9, 9])

console.log(aluno01.calcularMedia())


let alunos = [aluno01, aluno02, aluno03, aluno04]

module.exports = alunos;