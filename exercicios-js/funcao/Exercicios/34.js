function contemTodosCaracteres(stringA, stringB) {
    let stringATratada = stringA.toLowerCase()
    let stringBTratada = stringB.toLowerCase()
    let contem = true
    let achou = false

    for (i = 0; i < stringATratada.length; i++) {
        for (j = 0; j < stringBTratada.length; j++) {
            if (stringATratada[i] === stringBTratada[j]) {
                achou = true
            }
        }

        if (!achou) {
            contem = false
        }

        achou = false
    }

    for (i = 0; i < stringBTratada.length; i++) {
        for (j = 0; j < stringATratada.length; j++) {
            if (stringBTratada[i] === stringATratada[j]) {
                achou = true
            }
        }

        if (!achou) {
            contem = false
        }

        achou = false
    }

    return contem
}

console.log(contemTodosCaracteres("Roma", "Amor"))
console.log(contemTodosCaracteres("Casa", "Saca"))
console.log(contemTodosCaracteres("Casa", "Caso"))
console.log(contemTodosCaracteres("abc", "abcc"))
console.log(contemTodosCaracteres("abc", "abd"))