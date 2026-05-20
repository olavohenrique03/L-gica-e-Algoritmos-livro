// Leia o salario e o tempo(anos) que o funcionario trabalha na empresa. A cada 4 anos tem um acrescimo de 1% no salario

const prompt = require("prompt-sync")();

const salario = Number(prompt("Salario: "));
const tempoAno = Number(prompt("Tempo de Empresa (Anos): "));


const quadrienio = Math.floor(tempoAno / 4);
const ajuste = quadrienio * (salario * 0.01);
// const ajuste = salario * quadrienio / 100;
const salarioFinal = salario + ajuste;

console.log(`Quadriênios: ${quadrienio}`);
console.log(`Salário Final: ${salarioFinal.toFixed(2)}`);
// console.log(`Salário Final: ${salario+ajuste.toFixed(2)}`);
