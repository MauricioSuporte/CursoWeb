/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisaoEResto(dividendo, divisor) {
    const divisao = dividendo / divisor
    const resto = dividendo % divisor
    return [divisao, resto]
}

let resultado = divisaoEResto(5, 2)

console.log(resultado[0], resultado[1])
