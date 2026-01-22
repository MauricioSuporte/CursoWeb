function uniaoConcat(vetorInteiro, vetorString, vetorDouble) {
    console.log(Array.prototype.concat(vetorInteiro, vetorString, vetorDouble))

    const concatenados = vetorInteiro.concat(vetorString).concat(vetorDouble)
    console.log(concatenados)
}

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ["1", "2", "3", "4"]
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

uniaoConcat(vetorInteiro, vetorString, vetorDouble)