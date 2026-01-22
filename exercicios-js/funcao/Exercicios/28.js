function quantidadeParesEImpares() {
    let pares = 0
    let impares = 0

    for (i in arguments) {
        if (arguments[i] % 2 === 0) {
            pares++
        } else {
            impares++
        }
    }

    const quantidadeParesEImpares = [pares, impares]

    return quantidadeParesEImpares
}

const quantidade = quantidadeParesEImpares(1, 1, 3, 7, 5)
console.log(`Quantidade de pares: ${quantidade[0]} Quantidade de ímpares: ${quantidade[1]}`)