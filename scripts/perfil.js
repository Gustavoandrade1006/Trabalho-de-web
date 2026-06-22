const nome =  localStorage.getItem("nome-usuario");
const email =  localStorage.getItem("email-usuario");
const senha =  localStorage.getItem("senha-usuario");

let nomeAntigo = document.getElementById("nomeAntigo");
nomeAntigo.innerText = ` Nome Antigo do Usuário: ${nome}`;

let emailAntigo = document.getElementById("emailAntigo");
emailAntigo.innerText = `E-mail Antigo do Usuário: ${email}`;

let senhaAntigo = document.getElementById("senhaAntigo");
senhaAntigo.innerText = `Senha Antiga do Usuário: ${senha}`;

function verificarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function salvarAlteracoes() {
    const novoNome = document.getElementById("nomeInput").value;
    const novoEmail = document.getElementById("emailInput").value;
    const novoSenha = document.getElementById("senhaInput").value;

    if (novoNome) {
        localStorage.setItem("nome-usuario", novoNome);
    }
    if (verificarEmail(novoEmail)) {
        localStorage.setItem("email-usuario", novoEmail);
    }
    if (novoSenha) {
        localStorage.setItem("senha-usuario", novoSenha);
    }
    location.reload();
}