// if ternário
// É escrito horizontalmente
// para situações simples onde você precisa retornar uma coisa ou outra.

let dia = "sexta";
let resultado = dia == "domingo"? "Vou a praia":"Fico em casa";

//switch
// O switch nos oferece uma sintaxe mais legível para os casos em que queremos avaliar muitas possibilidades de um único valor
// Cada case deve terminar com a palavra break para evitar que o próximo bloco seja executado
// para quando você for trabalhar com uma função que é exatamente o valor esperado.

switch(dia){
    case "segunda":
        console.log("Vou tomar café.");
        break;
    case "quarta":
        console.log("Vou ao cinema.");
        break;
    case "terça":
        //implementa o que deverá ser feito
        break;
    default:  //Se quisermos considerar a possibilidade de nenhum dos casos ser verdadeiro, usamos a palavra chave defalt.
        console.log("Eu não vou fazer nada!")
}


