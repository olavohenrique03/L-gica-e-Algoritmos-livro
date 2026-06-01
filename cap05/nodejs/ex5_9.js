const prompt = require("prompt-sync")();

const produto = prompt('Informe o Produto: ');
const quantidade = Number(prompt('Informe o quantidade de etiquetas: '))

console.log(`Produto: ${produto}`)
console.log((`Numero de Etiquetas: ${quantidade}`))

for (let i = 0; i < quantidade / 2; i++) {
    console.log(produto.padEnd(30, '.') +' '+ produto.padStart(10) );
}
if (quantidade % 2 === 1) {
    console.log(produto)
}