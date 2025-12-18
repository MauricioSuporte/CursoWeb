const saudacao = 'Opa' // Contexto 1

function exec() {
    const saudacao = 'Faaala' // Contexto 2
    return saudacao
}

// Objetos são grupos anihados de pares ome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lagradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)