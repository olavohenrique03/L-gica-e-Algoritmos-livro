const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    const valorUso = Number(frm.inValorUso.value);
    const tempoUso = Number(frm.inTempoUso.value);

    const resultado = Math.ceil(tempoUso / 15) * valorUso;
    

    resp.innerText = `Valor a Pagar R$: ${resultado.toFixed(2)}`;

    e.preventDefault();
})