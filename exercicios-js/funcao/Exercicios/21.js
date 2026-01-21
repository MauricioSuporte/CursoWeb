function valorPlanoSaude(idade) {
    const taxa = 100
    switch (true) {
        case (idade >= 0 && idade <= 10):
            return taxa + 80
        case (idade > 10 && idade <= 30):
            return taxa + 50
        case (idade > 30 && idade <= 60):
            return taxa + 95
        case (idade > 60):
            return taxa + 130
        default:
            return "Idade inválida."
    }
}

console.log(valorPlanoSaude(0))
console.log(valorPlanoSaude(1))
console.log(valorPlanoSaude(9))
console.log(valorPlanoSaude(10))
console.log(valorPlanoSaude(11))
console.log(valorPlanoSaude(29))
console.log(valorPlanoSaude(30))
console.log(valorPlanoSaude(31))
console.log(valorPlanoSaude(59))
console.log(valorPlanoSaude(60))
console.log(valorPlanoSaude(61))
console.log(valorPlanoSaude(100))
console.log(valorPlanoSaude(-1))