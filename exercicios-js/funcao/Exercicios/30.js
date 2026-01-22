function maiorEMenor() {
    let maior = -99999999
    let menor = 99999999

    for (i in arguments) {
        if (arguments[i] > maior) maior = arguments[i]
        if (arguments[i] < menor) menor = arguments[i]
    }

    console.log(`Maior: ${maior}`)
    console.log(`Menor: ${menor}`)
}

maiorEMenor(2, 5, 77, 9, 1, -8, 6, -7, 0)