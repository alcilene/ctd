//-------------------------Exercício: “Meu primeiro if”

// Micro desafio
// Com este exercício, vamos construir um if simples.
// Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).
// Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.


let status = true;

if (status == true){
    console.log("O valor é verdadeiro")
} else {
    console.log("O valor é falso")
}

//-------------------------Exercício “Igualdade, if e else”

// Micro desafio
// Vamos brincar com as condições!
// Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".

let linguagem = "Python";

if(linguagem == "Javascript"){
    console.log("Estou aprendendo.")
} else {
    console.log("Aprenderei mais tarde")
}