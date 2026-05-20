const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");


frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const terceiro = preco / 2;
    const resultado = (preco * 3) - terceiro;
    
    resp1.innerText = `${produto} - promoção: Leve 3 por R$: ${resultado.toFixed(2)}`;
    resp2.innerText = `O 3* produto custa apenas R$: ${terceiro.toFixed(2)}`;

    e.preventDefault();
});