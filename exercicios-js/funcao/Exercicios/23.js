const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(texto) {
    return new Promise(resolve => {
        rl.question(texto, resposta => resolve(resposta));
    });
}

function mediaPonderada(nota1, nota2, nota3) {
    if (nota1 > nota2 && nota1 > nota3) {
        return (((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10)
    }
    if (nota2 > nota1 && nota2 > nota3) {
        return (((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10)
    }
    if (nota3 > nota1 && nota3 > nota2) {
        return (((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10)
    }
}

async function main() {
    while (true) {
        const codigoAluno = parseInt(await perguntar("Digite o código do aluno (negativo para sair): "));

        if (codigoAluno < 0) {
            console.log("Código negativo. Programa encerrado.");
            break;
        }

        const nota1 = parseFloat(await perguntar("Digite a nota 1: "));
        const nota2 = parseFloat(await perguntar("Digite a nota 2: "));
        const nota3 = parseFloat(await perguntar("Digite a nota 3: "));

        const media = mediaPonderada(nota1, nota2, nota3);
        const status = media >= 5 ? "APROVADO" : "REPROVADO"

        console.log("\nAluno:", codigoAluno);
        console.log("Notas:", nota1, nota2, nota3);
        console.log("Média:", media.toFixed(2));
        console.log("Situação:", status);
        console.log("-----------------------\n");
    }

    rl.close();
}

main();
