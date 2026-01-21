function valorAnuidade(mes, valorAnuidade) {
    let umMiasI = 1 + 0.05
    let tempo = mes - 1
    let potencia = umMiasI ** tempo
    let montante = valorAnuidade * potencia
    return montante.toFixed(2)
}


console.log(valorAnuidade(1, 1000))
console.log(valorAnuidade(2, 1000))
console.log(valorAnuidade(3, 1000))
console.log(valorAnuidade(4, 100))
console.log(valorAnuidade(4, 1000))
console.log(valorAnuidade(5, 1000))
console.log(valorAnuidade(10, 1000))
console.log(valorAnuidade(11, 1000))
console.log(valorAnuidade(12, 1000))