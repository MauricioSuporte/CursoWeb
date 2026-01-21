function calcularValor(codigoItem, quantidade) {
    switch (codigoItem) {
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default:
            return "Produto não existente"
    }
}

console.log(calcularValor(100, 2))
console.log(calcularValor(200, 2))
console.log(calcularValor(300, 2))
console.log(calcularValor(400, 2))
console.log(calcularValor(500, 2))
console.log(calcularValor(600, 2))
console.log(calcularValor(700, 2))