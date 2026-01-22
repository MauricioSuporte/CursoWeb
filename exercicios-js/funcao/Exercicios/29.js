function intervalo() {
    let intervaloDeInteresse = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let quantidadeNoIntervalo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (i in arguments) {
        for (j = 0; j < intervaloDeInteresse.length; j++) {
            if (intervaloDeInteresse[j] === arguments[i]) {
                quantidadeNoIntervalo[j]++
            }
        }
    }

    console.log(quantidadeNoIntervalo)
}

intervalo(6, 10, 11, 15, 14, 17, 2, 10, 20, 21)