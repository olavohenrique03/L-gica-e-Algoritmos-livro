const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

// Adicionar
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = frm.inPaciente.value;
    pacientes.push(nome)

    lista = ''

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respLista.innerText = `${lista}`
    frm.inPaciente.value = '';
    frm.inPaciente.focus();

});

// Urgência
frm.btUrgencia.addEventListener('click', (e) => {
    
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus()
        return
    }
    
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome)

    lista = ''

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente[i]}\n`))
    respLista.innerText = `${lista}`
    frm.inPaciente.value = '';
    frm.inPaciente.focus();
});

// Atender
frm.btAtender.addEventListener('click', (e) => {
    
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ''
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${pacientes[i]}\n`))
    respLista.innerText = `${lista}`
    
});