function login() {
    const nome = document.getElementById("nomeInput").value;
    const email = document.getElementById("emailInput").value;
    // Senhas no local storage não é seguro!
    const senha = document.getElementById("senhaInput").value;

    if (nome == "" || email == "" || senha == "") {
        return;
    } else {
        localStorage.setItem("nome-usuario", nome);
        localStorage.setItem("email-usuario", email);
        localStorage.setItem("senha-usuario", senha);
    }
}

