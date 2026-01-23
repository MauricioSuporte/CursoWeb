let valoresNumericos = [1, 4, 6, 2, 7]
let numeroInteiro = 5

function MultiplicaInteiroNoVetor(valoresNumericos, numeroInteiro) {
    let resultado = [...valoresNumericos]

    for (let i = 0; i < valoresNumericos.length; i++) {
        resultado.push(valoresNumericos[i] * numeroInteiro)
    }

    return resultado
}

function MultiplicaInteiroNoVetorSeElementoMaiorQue5(valoresNumericos, numeroInteiro) {
    let resultado = [...valoresNumericos]

    if (numeroInteiro > 5) {
        resultado = MultiplicaInteiroNoVetor(valoresNumericos, numeroInteiro)
    }

    return resultado
}

console.log(MultiplicaInteiroNoVetor(valoresNumericos, numeroInteiro))
console.log(MultiplicaInteiroNoVetorSeElementoMaiorQue5(valoresNumericos, numeroInteiro))