//--------------------- PODE SUBIR----------------------

//Crie uma função podeSubir() que receba dois parâmetros: 
// altura da pessoa;
// se está acompanhada.


// function podeSubir(altura, vemAcompanhado){
//     let podeSubir = false

//     if(altura <= 2.0 && altura >= 1.20)
//         podeSubir = true

//     if(altura >= 1.20 && vemAcompanhado){
//         podeSubir = true
//     }

//     return podeSubir
// }

// function podeSubir(altura, vemAcompanhado){
//     if((altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 && vemAcompanhado)){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function podeSubir(altura, vemAcompanhado){
//     return (altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 && vemAcompanhado)
// }

// console.log(1.20, true);


function podeSubir(altura, acompanhada) {
    if(altura >= 1.40 && altura <= 2.00) {
        return console.log("Pode Subir")
    } else if (altura < 1.40 && acompanhada) {
        return console.log("Pode entrar acompanhada")
    } else if (altura < 1.20) {
        return console.log("Não pode subir")
    }
}

podeSubir(1.50)
podeSubir(1.38, "acompanhada")
podeSubir(1.19)