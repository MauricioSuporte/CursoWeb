const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.9 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }',
]

// Retornar um array apenas com os preços
const preco = e => {
    const indexChave = e.indexOf('preco')
    const indexFechaChave = e.indexOf('}')
    return e.slice(indexChave + 8, indexFechaChave - 1)
}

const resultado = carrinho.map(preco)

console.log(resultado)


// Solução do profressor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)