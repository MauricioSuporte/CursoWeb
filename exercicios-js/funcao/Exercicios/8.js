/*8) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

function desempenho(pontuacoes) {
    const arrayPontuacoes = pontuacoes.split(" ")
    let recorde = Number(arrayPontuacoes[0])
    let numeroRecordesBatidos = 0
    let piorJogo = Number(arrayPontuacoes[0])
    let numeroPiorJogo = 0

    for (i = 0; i < arrayPontuacoes.length; i++) {

        if (Number(arrayPontuacoes[i]) < piorJogo) {
            piorJogo = Number(arrayPontuacoes[i])
            numeroPiorJogo = i + 1
        }
        if (Number(arrayPontuacoes[i]) > recorde) {
            recorde = Number(arrayPontuacoes[i])
            numeroRecordesBatidos++
        }
    };

    return [numeroRecordesBatidos, numeroPiorJogo]
}

console.log(desempenho("30 40 20 4 51 25 42 38 56 0"))