/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function nomeTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
        return 'Equilátero'
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return 'Isósceles'
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        return 'Escaleno'
    }
}

console.log(nomeTriangulo(2, 2, 2))
console.log(nomeTriangulo(1, 2, 3))
console.log(nomeTriangulo(3, 2, 1))
console.log(nomeTriangulo(2, 2, 3))
console.log(nomeTriangulo(3, 2, 2))
console.log(nomeTriangulo(2, 3, 2))