const copas = [
    { id: 1,  ano: 1930, campeao: "Uruguai",   imagem: "../imagens/copa 1930.jpg", descricao: "Primeira Copa do Mundo da história, com vitória do Uruguai." },
    { id: 2,  ano: 1934, campeao: "Itália",    imagem: "../imagens/copa 1934.jpg", descricao: "Segunda edição realizada na Itália, vitória dos anfitriões." },
    { id: 3,  ano: 1938, campeao: "Itália",    imagem: "../imagens/copa 1938.jpg", descricao: "Itália bicampeã mundial." },
    { id: 4,  ano: 1950, campeao: "Uruguai",   imagem: "../imagens/copa 1950.jpg", descricao: "Copa do Mundo no Brasil, com vitória do Uruguai." },
    { id: 5,  ano: 1954, campeao: "Alemanha",  imagem: "../imagens/copa 1954.jpg", descricao: "Copa do Mundo na Suíça, com vitória da Alemanha." },
    { id: 6,  ano: 1958, campeao: "Brasil",    imagem: "../imagens/copa 1958.jpg", descricao: "Primeira Copa do Mundo vencida pelo Brasil." },
    { id: 7,  ano: 1962, campeao: "Brasil",    imagem: "../imagens/copa 1962.jpg", descricao: "Brasil conquista o bicampeonato." },
    { id: 8,  ano: 1966, campeao: "Inglaterra",imagem: "../imagens/copa 1966.jpg", descricao: "Copa do Mundo na Inglaterra, com vitória dos anfitriões." },
    { id: 9,  ano: 1970, campeao: "Brasil",    imagem: "../imagens/copa 1970.jpg", descricao: "Brasil conquista o tricampeonato." },
    { id: 10, ano: 1974, campeao: "Alemanha",  imagem: "../imagens/copa 1974.jpg", descricao: "Copa do Mundo na Alemanha, com vitória dos anfitriões." },
    { id: 11, ano: 1978, campeao: "Argentina", imagem: "../imagens/copa 1978.jpg", descricao: "Copa do Mundo na Argentina, com vitória dos anfitriões." },
    { id: 12, ano: 1982, campeao: "Itália",    imagem: "../imagens/copa 1982.jpg", descricao: "Itália conquista seu terceiro título mundial." },
    { id: 13, ano: 1986, campeao: "Argentina", imagem: "../imagens/copa 1986.jpg", descricao: "Copa do Mundo no México, com vitória da Argentina." },
    { id: 14, ano: 1990, campeao: "Alemanha",  imagem: "../imagens/copa 1990.jpg", descricao: "Copa do Mundo na Itália, com vitória da Alemanha." },
    { id: 15, ano: 1994, campeao: "Brasil",    imagem: "../imagens/copa 1994.jpg", descricao: "Copa do Mundo nos Estados Unidos, com vitória do Brasil." },
    { id: 16, ano: 1998, campeao: "França",    imagem: "../imagens/copa 1998.jpg", descricao: "Copa do Mundo na França, com vitória dos anfitriões." },
    { id: 17, ano: 2002, campeao: "Brasil",    imagem: "../imagens/copa 2002.jpg", descricao: "Copa do Mundo no Japão e Coreia do Sul, com vitória do Brasil." },
    { id: 18, ano: 2006, campeao: "Itália",    imagem: "../imagens/copa 2006.jpg", descricao: "Copa do Mundo na Alemanha, com vitória da Itália." },
    { id: 19, ano: 2010, campeao: "Espanha",   imagem: "../imagens/copa 2010.jpg", descricao: "Copa do Mundo na África do Sul, com vitória da Espanha." },
    { id: 20, ano: 2014, campeao: "Alemanha",  imagem: "../imagens/copa 2014.jpg", descricao: "Copa do Mundo no Brasil, com vitória da Alemanha." },
    { id: 21, ano: 2018, campeao: "França",    imagem: "../imagens/copa 2018.jpg", descricao: "Copa do Mundo na Rússia, com vitória da França." },
    { id: 22, ano: 2022, campeao: "Argentina", imagem: "../imagens/copa 2022.jpg", descricao: "Copa do Mundo no Catar, com vitória da Argentina." },
    { id: 23, ano: 2026, campeao: "???",       imagem: "../imagens/copa 2026.jpg", descricao: "Copa do Mundo nos Estados Unidos, México e Canadá, em busca pelo hexa." }
];

let timeline_section = document.querySelector("#timeline-section");
copas.forEach(copa => {
    let timeline_item = document.createElement("div");
    timeline_item.classList.add("timeline-item", "fadeUp");
    
    let timeline_img = document.createElement("div");
    timeline_img.classList.add("timeline-img");
    let img = document.createElement("img");
    img.src = copa.imagem;
    timeline_img.appendChild(img);
    
    let timeline_content = document.createElement("div");
    timeline_content.classList.add("timeline-content");
    let timeline_label = document.createElement("h4");
    timeline_label.classList.add("timeline-label");
    timeline_label.innerText = copa.campeao;
    let timeline_year = document.createElement("h2");
    timeline_year.innerText = copa.ano;
    timeline_year.classList.add("timeline-year");
    let timeline_description = document.createElement("p");
    timeline_description.innerText = copa.descricao;

    if(copa.id%2 == 0){
        timeline_item.classList.add("right")
        timeline_img.classList.add("content-left");
    } else {
        timeline_item.classList.add("left")
        timeline_img.classList.add("content-right");
    }

    timeline_content.append(timeline_label, timeline_year, timeline_description);
    timeline_item.append(timeline_img, timeline_content);

    timeline_section.append(timeline_item);
});

function altura_linha() {
    const section = document.querySelector("#timeline-section");
    const primeiro = document.querySelector(".timeline-item:first-child");
    const ultimo = document.querySelector(".timeline-item:last-child");

    const top = primeiro.offsetTop + primeiro.offsetHeight / 2;
    const bottom = section.offsetHeight - ultimo.offsetTop - ultimo.offsetHeight / 2;

    section.style.setProperty("--linha-top", top + "px");
    section.style.setProperty("--linha-bottom", bottom + "px");
}
altura_linha();