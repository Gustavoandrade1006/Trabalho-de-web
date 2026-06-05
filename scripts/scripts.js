/* Links que podem ajudar com o LocalStorage:
    https://blog.formacao.dev/o-que-e-local-storage/
    https://www.youtube.com/watch?v=ewnyMjQjda0
    https://www.youtube.com/watch?v=xNLxJ8IraFA
*/
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        overlay.classList.add('ativo');
    } else {
        overlay.classList.remove('ativo');
    }
});

// aqui quando clica no overlay fecha o sidebar também
overlay.addEventListener('click', () => {
    menuToggle.checked = false;
    overlay.classList.remove('ativo');
});



//funçao para fazer os cards

const copas = [
    { ano: 1930, campeao: "Uruguai", imagem: "../imagens/copa 1930.jpg", descricao: "Primeira Copa do Mundo da história." },
    { ano: 1934, campeao: "Itália", imagem: "../imagens/copa 1934.jpg", descricao: "Segunda edição realizada na Itália." },
    { ano: 1938, campeao: "Itália", imagem: "../imagens/copa 1938.jpg", descricao: "Itália bicampeã mundial." },
    { ano: 1950, campeao: "Uruguai", imagem: "../imagens/copa 1950.jpg", descricao: "Copa do Mundo no Brasil, com vitória do Uruguai." },
    { ano: 1954, campeao: "Alemanha Ocidental", imagem: "../imagens/copa 1954.jpg", descricao: "Copa do Mundo na Suíça, com vitória da Alemanha Ocidental." },
    { ano: 1958, campeao: "Brasil", imagem: "../imagens/copa 1958.jpg", descricao: "Primeira Copa do Mundo vencida pelo Brasil." },
    { ano: 1962, campeao: "Brasil", imagem: "../imagens/copa 1962.jpg", descricao: "Brasil conquista o bicampeonato." },
    { ano: 1966, campeao: "Inglaterra", imagem: "../imagens/copa 1966.jpg", descricao: "Copa do Mundo na Inglaterra, com vitória dos anfitriões." },
    { ano: 1970, campeao: "Brasil", imagem: "../imagens/copa 1970.jpg", descricao: "Brasil conquista o tricampeonato." },
    { ano: 1974, campeao: "Alemanha Ocidental", imagem: "../imagens/copa 1974.jpg", descricao: "Copa do Mundo na Alemanha Ocidental, com vitória dos anfitriões." },
    { ano: 1978, campeao: "Argentina", imagem: "../imagens/copa 1978.jpg", descricao: "Copa do Mundo na Argentina, com vitória dos anfitriões." },
    { ano: 1982, campeao: "Itália", imagem: "../imagens/copa 1982.jpg", descricao: "Itália conquista seu terceiro título mundial." },
    { ano: 1986, campeao: "Argentina", imagem: "../imagens/copa 1986.jpg", descricao: "Copa do Mundo no México, com vitória da Argentina." },
    { ano: 1990, campeao: "Alemanha Ocidental", imagem: "../imagens/copa 1990.jpg", descricao: "Copa do Mundo na Itália, com vitória da Alemanha Ocidental." },
    { ano: 1994, campeao: "Brasil", imagem: "../imagens/copa 1994.jpg", descricao: "Copa do Mundo nos Estados Unidos, com vitória do Brasil." },
    { ano: 1998, campeao: "França", imagem: "../imagens/copa 1998.jpg", descricao: "Copa do Mundo na França, com vitória dos anfitriões." },
    { ano: 2002, campeao: "Brasil", imagem: "../imagens/copa 2002.jpg", descricao: "Copa do Mundo no Japão e Coreia do Sul, com vitória do Brasil." },
    { ano: 2006, campeao: "Itália", imagem: "../imagens/copa 2006.jpg", descricao: "Copa do Mundo na Alemanha, com vitória da Itália." },
    { ano: 2010, campeao: "Espanha", imagem: "../imagens/copa 2010.jpg", descricao: "Copa do Mundo na África do Sul, com vitória da Espanha." },
    { ano: 2014, campeao: "Alemanha", imagem: "../imagens/copa 2014.jpg", descricao: "Copa do Mundo no Brasil, com vitória da Alemanha." },
    { ano: 2018, campeao: "França", imagem: "../imagens/copa 2018.jpg", descricao: "Copa do Mundo na Rússia, com vitória da França." },
     { ano: 2022, campeao: "Argentina", imagem: "../imagens/copa 2022.jpg", descricao: "Copa do Mundo na Catar, com vitória da Argentina." }

];

const container = document.getElementById("cards-container");

copas.forEach(copa => {
    container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${copa.imagem}" class="card-img-top" alt="Copa ${copa.ano}">
            <div class="card-body">
                <h5 class="card-title">Copa ${copa.ano}</h5>
                <p class="card-text">${copa.descricao}</p>
                <a href="#" class="btn btn-primary">Ver mais</a>
            </div>
        </div>
    `;
});