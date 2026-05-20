const prompt = require("prompt-sync")();

const pessoas = Number(prompt("Quantas Pessoas? "));
const peixes = Number(prompt("Quantos Peixes? "));

let pagar;

if (pessoas == peixes) {
    pagar = pessoas * 20;
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}

console.log(pagar.toFixed(2));