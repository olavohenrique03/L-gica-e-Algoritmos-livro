const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);

    let divisores = 1;
    let resultado = `Divisores do ${num}: 1`

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            resultado += `, ${i}`;
            divisores += i 
        }

    }
    resp1.innerText = `${resultado} (Soma: ${divisores})`;

    if (divisores === num) {
        resp2.innerText = `${num} É um Número Perfeito`;
    } else {
        resp2.innerText = `${num} Não é um Número Perfeito`
    }
})