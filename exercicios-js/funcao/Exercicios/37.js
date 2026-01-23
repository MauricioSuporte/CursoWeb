function progressaoAritmetica(n, a1, r) {
    let somatorio = 0
    let numerosDaProgressao = []

    for (let i = 0; i < n; i++) {
        numerosDaProgressao.push(a1 + (i * r))
        somatorio = somatorio + numerosDaProgressao[i]
    }

    let resultado = [somatorio, numerosDaProgressao]

    return resultado
}

function progressaoGeometrica(n, a1, r) {
    let somatorio = 0
    let numerosDaProgressao = []

    for (let i = 0; i <= n; i++) {
        numerosDaProgressao.push(a1 * r ** (i))
        somatorio = somatorio + numerosDaProgressao[i]
    }

    let resultado = [somatorio, numerosDaProgressao]

    return resultado
}

console.log(progressaoAritmetica(5, 2, 3))

console.log(progressaoGeometrica(5, 3, 2))