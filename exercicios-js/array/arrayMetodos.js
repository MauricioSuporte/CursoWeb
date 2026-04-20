const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove do final
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no final
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionar
console.log(pilotos)

pilotos.splice(3, 1) // remover
console.log(pilotos)

const alunsPilotos1 = pilotos.slice(2) // divide em novo array
console.log(alunsPilotos1)

const alunsPilotos2 = pilotos.slice(1, 4) // dive a faixa em novo array
console.log(alunsPilotos2)