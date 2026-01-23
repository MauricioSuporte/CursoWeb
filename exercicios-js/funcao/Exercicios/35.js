let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function pilha(vetorPilha, vetorAdiciona) {
    let resultado = vetorPilha

    for (let i = 0; i < vetorAdiciona.length; i++) {
        resultado.push(vetorAdiciona[i])
    }

    return resultado
}

console.log(pilha(vetorPilha, vetorAdiciona))