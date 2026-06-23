nomeUsuario = localStorage.getItem("nome-usuario");
emailUsuario = localStorage.getItem("email-usuario");
senhaUsuario = localStorage.getItem("senha-usuario");

document.getElementById("nomeAntigo").innerText = `Nome Antigo do Usuário: ${nomeUsuario}`;
document.getElementById("emailAntigo").innerText = `E-mail Antigo do Usuário: ${emailUsuario}`;
document.getElementById("senhaAntigo").innerText = `Senha Antiga do Usuário: ${senhaUsuario}`;

function verificarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function salvarAlteracoes() {
    const novoNome = document.getElementById("nomeInput").value;
    const novoEmail = document.getElementById("emailInput").value;
    const novoSenha = document.getElementById("senhaInput").value;

    if (novoNome) localStorage.setItem("nome-usuario", novoNome);
    if (verificarEmail(novoEmail)) localStorage.setItem("email-usuario", novoEmail);
    if (novoSenha) localStorage.setItem("senha-usuario", novoSenha);

    location.reload();
}