/* Links que podem ajudar com o LocalStorage:
    https://blog.formacao.dev/o-que-e-local-storage/
    https://www.youtube.com/watch?v=ewnyMjQjda0
    https://www.youtube.com/watch?v=xNLxJ8IraFA
*/

// Sidebar
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('change', () => {
    overlay.classList.toggle('ativo', menuToggle.checked);
});

overlay.addEventListener('click', () => {
    menuToggle.checked = false;
    overlay.classList.remove('ativo');
});

// Tema
let lua = document.querySelector("#lua");
const modoEscuro = localStorage.getItem("modo-escuro") == "true";
document.body.classList.toggle("dark-theme", modoEscuro);

if (lua) {
    lua.checked = modoEscuro;
    lua.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme", lua.checked);
        localStorage.setItem("modo-escuro", lua.checked);
    });
}

// Logout
function logout() {
    localStorage.clear();
    location.reload();
}

// Botão login/perfil
const nomeUsuario = localStorage.getItem("nome-usuario");
const comeco = window.location.pathname.includes("pages") ? "" : "pages/";
let nav = document.getElementById("nav");
let botao = document.createElement("a");

if (nomeUsuario) {
    botao.innerText = "Perfil";
    botao.href = `${comeco}perfil.html`;
    botao.classList.add("text-decoration-none", "text-white")

    let sair = document.createElement("button");
    sair.innerText = "Sair 🚪";
    sair.classList.add("btn", "btn-link", "text-white", "text-start", "text-decoration-none", "px-0");
    sair.onclick = logout;
    document.getElementById("menu-lateral").appendChild(sair);
} else {
    botao.innerText = "Login";
    botao.href = `${comeco}login.html`;
    botao.target = "_parent";
    botao.classList.add("text-decoration-none", "text-white")
}
nav.prepend(botao);