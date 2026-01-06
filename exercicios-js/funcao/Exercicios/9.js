/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

function arredondarNota(nota) {
    const multiplo = 5
    const modulo = nota % multiplo
    const arredondar = modulo >= 3 && nota > 37

    if (arredondar) {
        return nota + (multiplo - modulo)
    } else {
        return nota
    }
}

console.log(`33 % 5 = ${33 % 5} => ${arredondarNota(33)}`)
console.log(`35 % 5 = ${35 % 5} => ${arredondarNota(35)}`)
console.log(`37 % 5 = ${37 % 5} => ${arredondarNota(37)}`)
console.log(`38 % 5 = ${38 % 5} => ${arredondarNota(38)}`)
console.log(`39 % 5 = ${39 % 5} => ${arredondarNota(39)}`)
console.log(`40 % 5 = ${40 % 5} => ${arredondarNota(40)}`)
console.log(`82 % 5 = ${82 % 5} => ${arredondarNota(82)}`)
console.log(`83 % 5 = ${83 % 5} => ${arredondarNota(83)}`)
console.log(`84 % 5 = ${84 % 5} => ${arredondarNota(84)}`)
console.log(`85 % 5 = ${85 % 5} => ${arredondarNota(85)}`)
console.log(`86 % 5 = ${86 % 5} => ${arredondarNota(86)}`)
console.log(`87 % 5 = ${87 % 5} => ${arredondarNota(87)}`)
console.log(`88 % 5 = ${88 % 5} => ${arredondarNota(88)}`)
console.log(`89 % 5 = ${89 % 5} => ${arredondarNota(89)}`)