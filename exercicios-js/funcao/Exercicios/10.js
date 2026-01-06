// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne trueou false.

function divisivelPor3(numero) {
    return (numero % 3 == 0)
}

console.log(`0 % 3 = ${0 % 3} => ${divisivelPor3(0)}`)
console.log(`1 % 3 = ${1 % 3} => ${divisivelPor3(1)}`)
console.log(`2 % 3 = ${2 % 3} => ${divisivelPor3(2)}`)
console.log(`3 % 3 = ${3 % 3} => ${divisivelPor3(3)}`)
console.log(`4 % 3 = ${4 % 3} => ${divisivelPor3(4)}`)
console.log(`5 % 3 = ${5 % 3} => ${divisivelPor3(5)}`)
console.log(`6 % 3 = ${6 % 3} => ${divisivelPor3(6)}`)