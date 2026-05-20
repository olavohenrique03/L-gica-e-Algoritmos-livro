const prompt = require("prompt-sync")();
const valor = Number(prompt("Informe o valor total da compra: "));


const aux = Math.floor(valor / 20);
console.log(aux)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorparcela = valor / parcelas;

console.log(`Pode pagar em ${parcelas}x de R$: ${valorparcela.toFixed}`);