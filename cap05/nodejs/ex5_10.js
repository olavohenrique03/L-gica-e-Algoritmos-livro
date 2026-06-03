const prompt = require("prompt-sync")();

const valor = Number(prompt("Informe o valor da conta: "));
const parcela = Number(prompt("Informe a quantidade de parcelas: "));

const result = Math.floor(valor / parcela);
const resultFinal = result + (valor % 3);

console.log(`Valor R$: ${valor.toFixed(2)}`)
console.log(`Número de parcelas: ${parcela}`)

for (let i = 1; i <= parcela; i++) {
    if (i === parcela) {
        console.log(`${i}* parcela: ${resultFinal.toFixed(2)}`);
    } else {
        console.log(`${i}* parcela: ${result.toFixed(2)}`);
    }
}


// ou

// for (let i = 1; i < result; i++) {
//     console.log(`${i}* parcela: ${resultFinal.toFixed(2)}`);
// }

// console.log(`${i}* parcela: ${result.toFixed(2)}`);