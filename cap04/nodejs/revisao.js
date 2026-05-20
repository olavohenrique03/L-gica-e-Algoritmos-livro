const prompt = require("prompt-sync")();

const usuario = prompt("Usuário: ");
const senha = Number(prompt("Senha: "));

if (usuario == "admin" && senha === 1234) {
    console.log(`Login bem-sucedido`)
} else {
    if (usuario === "admin") {
        console.log("Senha Incorreta")
    } else if (senha === 1234) {
        console.log("Usuário Incorreto")
    } else {
        console.log("Usuário e senha incorretos")
    }
}



for (let i = 1; i <= 10; i++) {}