function trocarElementosDosVetores(vetorA, vetorB) {
    [vetorA, vetorB] = [vetorB, vetorA]

    return [vetorA, vetorB]
}

const vetorA = [4, 6, 9]
const vetorB = [3, 5, 1]

console.log(trocarElementosDosVetores(vetorA, vetorB))