function imparesEntre(inicio = 0, fim = 100) {
    if (inicio > fim) {
        const auxiliar = inicio
        inicio = fim
        fim = auxiliar
    }

    let impares = []
    let i = inicio
    for (i; i <= fim; i++) {
        if (i % 2 === 1) {
            impares.push(i)
        }
    }

    return impares
}

console.log(imparesEntre(3, 9))
console.log(imparesEntre(11, 5))
console.log(imparesEntre())