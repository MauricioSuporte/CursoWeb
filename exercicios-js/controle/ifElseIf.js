Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprirmirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprirmirResultado(10)
imprirmirResultado(8.9)
imprirmirResultado(6.55)
imprirmirResultado(2.3)
imprirmirResultado(-1)
imprirmirResultado(11)