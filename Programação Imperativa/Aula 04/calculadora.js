// CALCULADORA NÍVEL I

// 01 Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar(num01, num02){
    return num01 + num02;
};

// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao(num01, num02){
    return num01 - num02;
}

// 03 Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(num01, num02){
    return num01 * num02;
}

// 04 Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(num01, num02){
    return num01 / num02;
}

// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
// console.log ("-------------- Teste de Operações / Calculadora --------------")


console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(1, 2));
console.log(subtracao(1, 2));
console.log(multiplicacao(2, 2));
console.log(divisao(2, 0));

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

function quadradoDoNumero (n1) {
    return multiplicacao(n1,n1);
}
console.log(quadradoDoNumero(2));

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaTresNumeros(n1, n2, n3) {
    return divisao(adicionar(n1,adicionar(n2, n3)),3)

}
console.log(mediaTresNumeros(2,4,8))

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

function calcularPorcentagem (n1, porcentagem) {
    return (multiplicacao(n1,divisao(porcentagem,100)))
}
console.log(calcularPorcentagem(300,15))


// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).


function geradorDePorcentagem (porcentagem, nTotal ){
    return multiplicacao(divisao(porcentagem, nTotal) ,100)
}

console.log(geradorDePorcentagem(47, 300));












    