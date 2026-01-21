function calcularAumento(plano, salario) {
    switch (plano) {
        case "A":
            console.log(salario * 1.1)
            break;
        case "B":
            console.log(salario * 1.15)
            break;
        case "C":
            console.log(salario * 1.2)
            break;
        default:
            console.log("Plano inválido")
            break;
    }
}

calcularAumento("A", 1000)
calcularAumento("B", 1000)
calcularAumento("C", 1000)
calcularAumento("D", 1000)