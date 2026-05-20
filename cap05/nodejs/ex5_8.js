const prompt = require("prompt-sync")();
console.log("Descobrir o ano que teve copa do mundo")
console.log("--------------------------------------")

do {
    const ano = Number(prompt("Digite um ano (Ou 0 para sair): "));
    if (ano == 0) {
        break

    } else if (ano === 1942 || ano === 1946) {
        console.log(`Nesse ano (${ano}) Não houve copa por conta da Guerra`);

    } else if (ano >= 1930 && ano % 4 === 2) {
        console.log(`Nesse ano (${ano}) Teve copa`);

    } else {
        console.log(`Nesse ano (${ano})Não houve copa`);
    }

} while (true) 

console.log("Saiu")