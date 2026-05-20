const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    const numero2 = Number(frm.inNumero2.value);
    let resposta = "";

    // for (let i = 0; i <= 10; i++) {
    //     resposta += `${numero} x ${i} = ${numero * i}\n`;
    // }

    for (let i = 0; i <= numero2; i++) {
        
        resposta = `${resposta}${numero} x ${i} = ${numero * i} \n`
    }
    
    resp.innerText = resposta;
});

// resposta = valor (sobrescreve)
// resposta += valor (acumula)