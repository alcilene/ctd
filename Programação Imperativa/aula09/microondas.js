// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function dobro(n){
    return n * 2;
}

function triplo(n){
    return n * 3;
}


function pipoca (tempoEmSegundos){
    if (tempoEmSegundos >= 10 && tempoEmSegundos <= dobro(10)) {
        return "Prato pronto, bom apetite!!!";
    } 
    else if (tempoEmSegundos < 10 ) {
        return "Tempo insuficiente";
    } 
    else if (tempoEmSegundos > dobro(10) && tempoEmSegundos < triplo(10)) {
        return "A comida queimou. ";
    }
    else if (tempoEmSegundos >= triplo(10)) {
        return "Kabuuuuummmm!!!";
    }
}

function macarrao (tempoEmSegundos){
    if (tempoEmSegundos >= 8 && tempoEmSegundos <= dobro(8)) {
        return "Prato pronto, bom apetite!!!";
    } 
    else if (tempoEmSegundos < 8 ) {
        return "Tempo insuficiente";
    } 
    else if (tempoEmSegundos > dobro(8) && tempoEmSegundos < triplo(8)) {
        return "A comida queimou. ";
    }
    else if (tempoEmSegundos >= triplo(8)) {
        return "Kabuuuuummmm!!!";
    }
}

function carne (tempoEmSegundos){
    if (tempoEmSegundos >= 15 && tempoEmSegundos <= dobro(15)) {
        return "Prato pronto, bom apetite!!!";
    } 
    else if (tempoEmSegundos < 15 ) {
        return "Tempo insuficiente";
    } 
    else if (tempoEmSegundos > dobro(15) && tempoEmSegundos < triplo(15)) {
        return "A comida queimou. ";
    }
    else if (tempoEmSegundos >= triplo(15)) {
        return "Kabuuuuummmm!!!";
    }
}

function feijao (tempoEmSegundos){
    if (tempoEmSegundos >= 12 && tempoEmSegundos <= dobro(12)) {
        return "Prato pronto, bom apetite!!!";
    } 
    else if (tempoEmSegundos < 12 ) {
        return "Tempo insuficiente";
    } 
    else if (tempoEmSegundos > dobro(12) && tempoEmSegundos < triplo(12)) {
        return "A comida queimou. ";
    }
    else if (tempoEmSegundos >= triplo(12)) {
        return "Kabuuuuummmm!!!";
    }
}

function brigadeiro (tempoEmSegundos){
    if (tempoEmSegundos >= 8 && tempoEmSegundos <= dobro(8)) {
        return "Prato pronto, bom apetite!!!";
    } 
    else if (tempoEmSegundos < 8 ) {
        return "Tempo insuficiente";
    } 
    else if (tempoEmSegundos > dobro(8) && tempoEmSegundos < triplo(8)) {
        return "A comida queimou. ";
    }
    else if (tempoEmSegundos >= triplo(8)) {
        return "Kabuuuuummmm!!!";
    }
}


function microondas(prato, tempoEmSegundos){
    if (prato == "Pipoca") {
        return pipoca(tempoEmSegundos)
    }
    else if (prato == "Macarrão") {
        return macarrao(tempoEmSegundos)
    }
    else if (prato == "Carne") {
        return carne(tempoEmSegundos)
    } 
    else if (prato == "Feijão") {
        return feijao(tempoEmSegundos)
    } 
    else if (prato == "Brigadeiro") {
        return macarrao(tempoEmSegundos)
    }  
    else {
        return "Prato Inexistente";
    }
}

console.log(microondas("Brigadeiro", 5))