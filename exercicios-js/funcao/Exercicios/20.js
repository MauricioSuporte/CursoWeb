function celulas(valor) {
    let valorAtual = valor
    let quantidadeDeNotas = ""

    if ((valorAtual / 100) >= 1) {
        quantidadeDeNotas = quantidadeDeNotas + notasDeCem(valorAtual)
        valorAtual = valorAtual % 100
    }

    if ((valorAtual / 50) >= 1) {
        quantidadeDeNotas = quantidadeDeNotas + notasDeCinquenta(valorAtual)
        valorAtual = valorAtual % 50
    }

    if ((valorAtual / 10) >= 1) {
        quantidadeDeNotas = quantidadeDeNotas + notasDeDez(valorAtual)
        valorAtual = valorAtual % 10
    }

    if ((valorAtual / 5) >= 1) {
        quantidadeDeNotas = quantidadeDeNotas + notasDeCinco(valorAtual)
        valorAtual = valorAtual % 5
    }

    if ((valorAtual / 1) >= 1) {
        quantidadeDeNotas = quantidadeDeNotas + notasDeUm(valorAtual)
    }

    return quantidadeDeNotas.trim()
}

function notasDeCem(valor) {
    let notasDeCem = Math.trunc(valor / 100)
    return ` ${notasDeCem} nota(s) de R$100.`
}

function notasDeCinquenta(valor) {
    let notasDeCinquenta = Math.trunc(valor / 50)
    return ` ${notasDeCinquenta} nota(s) de R$50.`
}

function notasDeDez(valor) {
    let notasDeDez = Math.trunc(valor / 10)
    return ` ${notasDeDez} nota(s) de R$10.`
}

function notasDeCinco(valor) {
    let notasDeUm = Math.trunc(valor / 5)
    return ` ${notasDeUm} nota(s) de R$5.`
}

function notasDeUm(valor) {
    let notasDeUm = valor / 1
    return ` ${notasDeUm} nota(s) de R$1.`
}

console.log("1: " + celulas(1))
console.log("2: " + celulas(2))
console.log("3: " + celulas(3))
console.log("4: " + celulas(4))
console.log("5: " + celulas(5))
console.log("6: " + celulas(6))
console.log("7: " + celulas(7))
console.log("8: " + celulas(8))
console.log("9: " + celulas(9))
console.log("10: " + celulas(10))
console.log("11: " + celulas(11))
console.log("12: " + celulas(12))
console.log("13: " + celulas(13))
console.log("14: " + celulas(14))
console.log("15: " + celulas(15))
console.log("18: " + celulas(18))
console.log("20: " + celulas(20))
console.log("30: " + celulas(30))
console.log("40: " + celulas(40))
console.log("50: " + celulas(50))
console.log("80: " + celulas(80))
console.log("90: " + celulas(90))
console.log("100: " + celulas(100))
console.log("110: " + celulas(110))
console.log("138: " + celulas(138))
console.log("189: " + celulas(189))
console.log("1500: " + celulas(1500))
console.log("8000: " + celulas(8000))