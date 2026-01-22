function crescimento(altura1, altura2, crecimentoAnual1, crescimentoAnual2) {
    if (altura1 === altura2) {
        return "Não existe uma criança menor"
    }

    let maior = 0
    let menor = 0
    let crescimentoMenor = 0
    let crescimentoMaior = 0
    let anos = 0

    if (altura1 > altura2) {
        maior = altura1
        menor = altura2
        crescimentoMaior = crecimentoAnual1
        crescimentoMenor = crescimentoAnual2
    } else {
        maior = altura2
        menor = altura1
        crescimentoMaior = crescimentoAnual2
        crescimentoMenor = crecimentoAnual1
    }

    while (menor <= maior && anos <= 100) {
        menor = menor + crescimentoMenor
        maior = maior + crescimentoMaior
        anos++
    }

    if (anos > 100) {
        return "A criança menor não ultrapassará a maior durante a sua vida."
    }

    return `A criança menor ultrapassará a maior em ${anos} anos.`
}

console.log(crescimento(50, 50, 12, 10))
console.log(crescimento(40, 50, 12, 10))
console.log(crescimento(50, 40, 12, 10))
console.log(crescimento(50, 40, 10, 12))