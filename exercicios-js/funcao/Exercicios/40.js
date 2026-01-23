function conceito(notas) {
    let conceito = []
    for (let i = 0; i < notas.length; i++) {
        switch (true) {
            case (notas[i] >= 0 && notas[i] <= 4.9):
                conceito.push(`${notas[i]}: D`)
                break;
            case (notas[i] >= 5 && notas[i] <= 6.9):
                conceito.push(`${notas[i]}: C`)
                break;
            case (notas[i] >= 7 && notas[i] <= 8.9):
                conceito.push(`${notas[i]}: B`)
                break;
            case (notas[i] >= 9 && notas[i] <= 10):
                conceito.push(`${notas[i]}: A`)
                break;
        }
    }

    return conceito
}

const notas = [3.5, 7.2, 9.0, 5.8]

console.log(conceito(notas))