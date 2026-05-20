const frm = document.querySelector("form");
const resp = document.querySelector("h2");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    // let peso;

    // if (masculino) {
    //     peso = 22 * Math.pow(altura, 2);
        
    // } else {
    //     peso = 21 * Math.pow(altura, 2);
    // }


    // Operador ternário
    const peso = masculino ? peso = 22 * Math.pow(altura, 2) : peso = 21 * Math.pow(altura, 2)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
});

frm.addEventListener("reset", (e) => {
    resp.innerText = ``;  
})



