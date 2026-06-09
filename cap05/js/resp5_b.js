const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numChin = Number(frm.inNumChin.value);
    const numAno = Number(frm.inNumAno.value);

    let resposta = ""
    let total = numChin


    for (let i = 1; i <= numAno; i++) {
        resposta += `${i}* Ano: ${total} Chinchilas \n`
        total = total * 3
    }

    resp.innerText = resposta

})