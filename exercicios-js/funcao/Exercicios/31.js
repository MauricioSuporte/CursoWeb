function quantidadeNegativos() {
    let quantidade = 0

    for (i in arguments) {
        if (arguments[i] < 0) quantidade++
    }

    return quantidade
}

console.log(`O Array possui ${quantidadeNegativos(2, 5, 77, 9, 1, -8, 6, -7, 0)} negativos.`)