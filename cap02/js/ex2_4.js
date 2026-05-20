const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inQuilo.value);
    const grama = Number(frm.inGramas.value);

    const valor = (preco / 1000) * grama;

    resposta.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`;

    e.preventDefault();
})