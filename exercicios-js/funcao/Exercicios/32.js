function medediaAritimetica() {
    let quantidade = 0
    let soma = 0

    for (i in arguments) {
        soma = soma + arguments[i]
        quantidade++
    }

    return soma / quantidade
}

console.log(`A média é: ${medediaAritimetica(2, 5, -7, 4, 6, 12)}`)