const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const horario = Number(frm.inHora.value);

    let conversao = horario + 5;

    if (conversao >= 24) {
        conversao = conversao - 24;
    }

    resp.innerText = `Hora na França: ${conversao.toFixed(2)}`;
})