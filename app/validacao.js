function verificaChute(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        console.log('Valor inválido')
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}