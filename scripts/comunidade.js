function deletarComentario(indice) {
    let comentarios = JSON.parse(localStorage.getItem("listaComentarios")) || [];
    comentarios.splice(indice, 1);
    localStorage.setItem("listaComentarios", JSON.stringify(comentarios));
    atualizarComentarios(document.getElementById("container-comentarios"));
}

function criarComentario(dados, indice) {
    let novoCard = document.createElement("div");
    novoCard.classList.add("card-comentario");

    novoCard.innerHTML = `
        <div class="card-comentario-header">
            <div class="card-usuario-info">
                <i class="bi bi-person-circle display-1 text-secondary"></i>
                <h5>${dados.nomeLogado}</h5>
            </div>
            <div>
                <button class="btn btn-danger btn-sm deletar">Excluir</button>
            </div>
        </div>
        <p class="card-assunto">Assunto: ${dados.assunto}</p>
        <p class="card-comentario-texto">${dados.texto}</p>
    `;

    novoCard.querySelector(".deletar").addEventListener("click", () => {
        deletarComentario(indice);
    });

    return novoCard;
}

function salvarComentario(dados) {
    let comentarios = JSON.parse(localStorage.getItem('listaComentarios')) || [];
    comentarios.push(dados);
    localStorage.setItem("listaComentarios", JSON.stringify(comentarios));
}

function carregarComentarios(containerComentarios) {
    let comentarios = JSON.parse(localStorage.getItem('listaComentarios')) || [];

    comentarios.slice().reverse().forEach((comentario, indiceInvertido) => {
        const indiceReal = comentarios.length - 1 - indiceInvertido;
        let card = criarComentario(comentario, indiceReal);
        containerComentarios.appendChild(card);
    });

    containerComentarios.insertBefore(criarComentarioAdmin(), containerComentarios.firstChild);
}

function atualizarComentarios(containerComentarios) {
    containerComentarios.innerHTML = "";
    carregarComentarios(containerComentarios);
}

function criarComentarioAdmin() {
    const card = document.createElement("div");
    card.classList.add("card-comentario", "admin");

    card.innerHTML = `
        <div class="card-comentario-header">
            <div class="card-usuario-info">
                <i class="bi bi-person-circle display-1 text-secondary"></i>
                <h5>⚽ Admin_Coblog</h5>
            </div>
        </div>
        <p class="card-assunto">Assunto: Geral</p>
        <p class="card-comentario-texto">Sejam bem-vindos! Deixem seus palpites e comentários sobre os jogos aqui na nossa aba da comunidade.</p>
    `;

    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const formComentario = document.getElementById("form-comentario");
    const containerComentarios = document.getElementById("container-comentarios");

    const modalElement1 = document.getElementById("modalAviso");
    const modalAviso = new bootstrap.Modal(modalElement1);
    const modalElement = document.getElementById("modalComentario");
    const modalComentario = new bootstrap.Modal(modalElement);

    if (formComentario && containerComentarios) {
        carregarComentarios(containerComentarios);

        formComentario.addEventListener("submit", (e) => {
            e.preventDefault();

            const nomeLogado = localStorage.getItem("nome-usuario");
            const assunto = document.getElementById("assunto-comentario").value.trim();
            const texto = document.getElementById("texto-comentario").value.trim();

            if (assunto === "" || texto === "") return;

            if (!nomeLogado) {
                modalAviso.show();
                formComentario.reset();
                modalComentario.hide();
                return;
            }

            let comentario = { "nomeLogado": nomeLogado, "assunto": assunto, "texto": texto };
            salvarComentario(comentario);

            formComentario.reset();
            modalComentario.hide();
            atualizarComentarios(containerComentarios);
        });
    }
});