// 1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// 	- ACESSO PERMITIDO caso a senha seja válida.
// 	- ACESSO NEGADO caso a senha seja inválida.

function senhaValida ( senha) {
    if (senha == 1234) {
        return "Acesso Permitido";
    }
    else {
        return "Acesso Negado"
    }
}

console.log(senhaValida(1235));


// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.

function numeroMaior(n1, n2) {
    if (n1 > n2) {
        return `${n1} é maior`;
    }
    else if (n1 < n2) {
    return `${n2} é maior`;
    } 
    else{
        return "Os dois números são iguais."
    }
}

console.log(numeroMaior(5,5))

// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

let mes = 2;

switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
     case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 2:
        console.log("Setembro");
        break;
    case 3:
        console.log("Outubro");
        break;
    case 4:
        console.log("Novembro");
        break;
    case 5:
        console.log("Dezembro");
        break;
    default:
        console.log("Isso não é nenhum mês");
}

// 4 - Reescreva função do exercício 1, utilizando o operador ternário.

let senha = 1234 ;
let resultado = senha == 1234? "Acesso Permitido":"Acessado Negado";

console.log(resultado);