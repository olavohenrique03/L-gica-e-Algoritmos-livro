// ler peso de uma ração em kg, e quanto o gato consome por dia da ração gramas. informar quantos dias ira durar a ração e quanto sobra em gramas.

const prompt = require("prompt-sync")();

const racaokg = Number(prompt("Peso da Ração (kg): "));
const consumogrm = Number(prompt("Consumo diário (gr): "));

const duracao = Math.floor((racaokg * 1000) / consumogrm);
const sobra = racaokg * 1000 - duracao * consumogrm;

console.log(`Duração: ${duracao}`);
console.log(`Sobra: ${sobra}`);