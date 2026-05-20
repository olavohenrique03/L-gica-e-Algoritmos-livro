const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velocidadeP = Number(frm.inVeloPermi.value);
    const velocidadeC = Number(frm.inVeloCondu.value);

    const porcentagem =  velocidadeP * 0.2 + velocidadeP

    if (velocidadeC < velocidadeP) {
        resp.innerText = `Sem Multa`;
    } else if (velocidadeC >= porcentagem) {
        resp.innerText = `Multa Grave`;
    } else {
        resp.innerText = `Multa Leve`;
    }
})

// Resposta livro
// cria as condições para verificar situação do condutor
  if (velCondutor <= velPermitida) {
    resp.innerText = "Situação: Sem Multa"
  } else {
    const maisVinte = velPermitida * 1.2
    if (velCondutor <= maisVinte) {
      resp.innerText = "Situação: Multa Leve"
    } else {
      resp.innerText = "Situação: Multa Grave"
    }
  }