function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 50
    }
}

console.log(criarProduto('Geladeira', 7000))
console.log(criarProduto('Fogão', 500))
console.log(criarProduto('Armário', 1600))
console.log(criarProduto('Guarda roupa', 1400))