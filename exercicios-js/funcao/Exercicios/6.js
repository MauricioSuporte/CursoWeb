/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function aplicacaoJurosSimples(capitalInicia, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicia * taxaDeJuros * tempoDeAplicacao
}

function aplicacaoJurosComposto(capitalInicia, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicia * (1 + taxaDeJuros) ** tempoDeAplicacao
}

console.log(aplicacaoJurosSimples(100, 10 / 100, 2))
console.log(aplicacaoJurosComposto(100, 10 / 100, 2))
