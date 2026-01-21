function venderFruta(nomeFruta) {
    switch (nomeFruta) {
        case "maça":
            console.log("Não vendemos esta fruta aqui")
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break;
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break;
        default:
            console.log("Fruta inválida")
            break;
    }
}

venderFruta("maça")
venderFruta("kiwi")
venderFruta("melancia")
venderFruta("uva")