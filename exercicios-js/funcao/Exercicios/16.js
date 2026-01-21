function calculadora(n1, operador, n2) {
    switch (operador) {
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "/":
            return n1 / n2
        case "*":
            return n1 * n2
        default:
            return "Operação inválida"
    }
}

console.log(calculadora(2, "+", 3))
console.log(calculadora(2, "-", 3))
console.log(calculadora(2, "/", 3))
console.log(calculadora(2, "*", 3))
console.log(calculadora(2, "&", 3))