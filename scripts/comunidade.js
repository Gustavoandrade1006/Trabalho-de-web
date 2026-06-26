document.addEventListener("DOMContentLoaded", () => {
    const formComentario = document.getElementById("form-comentario");
    const containerComentarios = document.getElementById("container-comentarios");

    const modalElement1 = document.getElementById("modalAviso");
    const modalAviso = new bootstrap.Modal(modalElement1);
    const modalElement = document.getElementById("modalComentario");
    const modalComentario = new bootstrap.Modal(modalElement);

    if (formComentario && containerComentarios) {
        formComentario.addEventListener("submit", (e) => {
            e.preventDefault();

            // 1. Pega o nome do LocalStorage 
            const nomeLogado = localStorage.getItem("nome-usuario");

            // 2. Pega os valores dos novos campos do formulário
            const assunto = document.getElementById("assunto-comentario").value.trim();
            const texto = document.getElementById("texto-comentario").value.trim();

            if (assunto === "" || texto === "") return;

            if (!nomeLogado) {
                modalAviso.show();
                formComentario.reset();
                modalComentario.hide();
                return
            }
            // 3. Cria a nova estrutura com a foto e assunto idênticos ao desenho
            const novoCard = document.createElement("div");
            novoCard.classList.add("card-comentario");

            novoCard.innerHTML = `
                <div class="card-comentario-header">
                    <div class="card-usuario-info">
                        <i class="bi bi-person-circle display-1 text-secondary"></i>
                        <h5>${nomeLogado}</h5>
                    </div>
                    <p class="card-assunto">Assunto: ${assunto}</p>
                </div>
                <p class="card-comentario-texto">${texto}</p>
            `;

            // Adiciona no topo da listagem
            containerComentarios.insertBefore(novoCard, containerComentarios.firstChild);

            // Limpa e fecha
            formComentario.reset();
            modalComentario.hide();
        });
    }
});