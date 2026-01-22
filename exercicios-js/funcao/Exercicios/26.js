const EhPar = numero => numero % 2 === 0

let numero = 1

while (numero <= 100) {
    const ehPar = EhPar(numero)

    if (ehPar)
        console.log(numero);

    numero++
}