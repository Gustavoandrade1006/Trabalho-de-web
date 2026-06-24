nomeUsuario = localStorage.getItem("nome-usuario");
emailUsuario = localStorage.getItem("email-usuario");
senhaUsuario = localStorage.getItem("senha-usuario");


document.getElementById("nomeUsuarioPerfil").innerText = nomeUsuario;

document.getElementById("nomeAntigo").innerText = `Nome Atual: ${nomeUsuario}`;
document.getElementById("emailAntigo").innerText = `E-mail Atual: ${emailUsuario}`;
document.getElementById("senhaAntigo").innerText = `Senha Atual: ${senhaUsuario}`;

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