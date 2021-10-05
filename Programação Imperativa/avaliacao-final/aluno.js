

function Aluno(nome, quantidadeDeFaltas, notas){
    this.nome = nome;
    this.quantidadeDeFaltas = quantidadeDeFaltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let total = this.notas.reduce((anterior, atual) => anterior + atual)
        
            return total/this.notas.length;
    }
            
    this.faltas = function(){
         this.quantidadeDeFaltas++
    };
    
};

module.exports = Aluno;


