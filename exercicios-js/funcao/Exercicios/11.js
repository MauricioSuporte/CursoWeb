function bissexto(ano) {
    if (ano <= 0) return false
    if (ano % 400 === 0) return true
    if (ano % 100 === 0) return false
    if (ano % 4 === 0) return true
    return false
}

console.log(`2024 ${bissexto(2024) === true ? 'é' : `não é`} bissexto`)
console.log(`100 ${bissexto(100) === true ? 'é' : `não é`} bissexto`)
console.log(`200 ${bissexto(200) === true ? 'é' : `não é`} bissexto`)
console.log(`400 ${bissexto(400) === true ? 'é' : `não é`} bissexto`)
console.log(`2025 ${bissexto(2025) === true ? 'é' : `não é`} bissexto`)
console.log(`2026 ${bissexto(2026) === true ? 'é' : `não é`} bissexto`)
console.log(`2027 ${bissexto(2027) === true ? 'é' : `não é`} bissexto`)
console.log(`-1 ${bissexto(-1) === true ? 'é' : `não é`} bissexto`)
console.log(`0 ${bissexto(0) === true ? 'é' : `não é`} bissexto`)
console.log(`1 ${bissexto(1) === true ? 'é' : `não é`} bissexto`)
console.log(`2 ${bissexto(2) === true ? 'é' : `não é`} bissexto`)
console.log(`3 ${bissexto(3) === true ? 'é' : `não é`} bissexto`)
console.log(`4 ${bissexto(4) === true ? 'é' : `não é`} bissexto`)