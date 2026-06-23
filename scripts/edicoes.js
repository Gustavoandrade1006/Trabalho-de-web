const copas = [
    { id: 1,  ano: 1930, campeao: "Uruguai",   imagem: "../imagens/copa 1930.jpg", descricao: "Realizada no Uruguai, a primeira Copa do Mundo da FIFA contou com a participação de 13 seleções e marcou o início do principal torneio de futebol do planeta. Sem fase classificatória, as equipes foram convidadas para participar da competição. A final ocorreu no Estádio Centenário, em Montevidéu, onde o Uruguai venceu a Argentina por 4 a 2 diante de sua torcida, tornando-se o primeiro campeão mundial. O torneio também revelou o argentino Guillermo Stábile como artilheiro, com oito gols, e consolidou o futebol como um esporte de alcance internacional." },
    { id: 2,  ano: 1934, campeao: "Itália",    imagem: "../imagens/copa 1934.jpg", descricao: "Realizada na Itália, a segunda edição da Copa do Mundo foi a primeira a contar com uma fase classificatória para definir os participantes. O torneio reuniu 16 seleções e adotou o sistema de mata-mata desde a primeira rodada. Jogando em casa, a Itália conquistou seu primeiro título mundial ao derrotar a Tchecoslováquia por 2 a 1 na final, após prorrogação. A competição também ficou marcada pelo forte uso político do evento pelo governo de Benito Mussolini para promover o regime fascista." },
    { id: 3,  ano: 1938, campeao: "Itália",    imagem: "../imagens/copa 1938.jpg", descricao: "Realizada na França, a terceira edição da Copa do Mundo foi vencida novamente pela Itália, que se tornou a primeira seleção bicampeã mundial. O torneio contou com 15 equipes devido à desistência da Áustria após sua anexação pela Alemanha. A final foi disputada em Paris, onde os italianos derrotaram a Hungria por 4 a 2. A competição também foi marcada pelo clima de tensão política que antecedia a Segunda Guerra Mundial." },
    { id: 4,  ano: 1950, campeao: "Uruguai",   imagem: "../imagens/copa 1950.jpg", descricao: "Realizada no Brasil, a primeira Copa do Mundo após a Segunda Guerra Mundial marcou o retorno do torneio após 12 anos de pausa. Diferentemente das edições anteriores, o campeão foi definido por um quadrangular final. O torneio ficou eternizado pelo “Maracanaço”, quando o Uruguai venceu o Brasil por 2 a 1 diante de cerca de 200 mil torcedores no Estádio do Maracanã, conquistando seu segundo título mundial em um dos episódios mais marcantes da história do futebol." },
    { id: 5,  ano: 1954, campeao: "Alemanha",  imagem: "../imagens/copa 1954.jpg", descricao: "Realizada na Suíça, a Copa do Mundo de 1954 ficou conhecida pela surpreendente conquista da Alemanha Ocidental, que derrotou a favorita Hungria por 3 a 2 na final, no chamado “Milagre de Berna”. O torneio teve uma das maiores médias de gols da história e apresentou grandes atuações individuais, especialmente do atacante húngaro Sándor Kocsis, artilheiro da competição com 11 gols." },
    { id: 6,  ano: 1958, campeao: "Brasil",    imagem: "../imagens/copa 1958.jpg", descricao: "Realizada na Suécia, a Copa do Mundo de 1958 marcou a primeira conquista do Brasil no torneio. A seleção brasileira, liderada por jogadores como Pelé, Garrincha, Didi e Vavá, encantou o mundo com seu futebol ofensivo. Na final, o Brasil venceu a Suécia por 5 a 2 e se tornou o primeiro país a conquistar uma Copa fora de seu continente, com Pelé surgindo como grande estrela aos 17 anos." },
    { id: 7,  ano: 1962, campeao: "Brasil",    imagem: "../imagens/copa 1962.jpg", descricao: "Realizada no Chile, a Copa do Mundo de 1962 consolidou a força da seleção brasileira, que conquistou seu segundo título consecutivo. Mesmo com a lesão de Pelé ainda na fase de grupos, o Brasil contou com o brilho de Garrincha para superar seus adversários. Na final, a equipe venceu a Tchecoslováquia por 3 a 1 e confirmou sua hegemonia no futebol mundial." },
    { id: 8,  ano: 1966, campeao: "Inglaterra",imagem: "../imagens/copa 1966.jpg", descricao: "Realizada na Inglaterra, a Copa do Mundo de 1966 marcou o primeiro e único título mundial dos ingleses. A final aconteceu no Estádio de Wembley, onde a Inglaterra venceu a Alemanha Ocidental por 4 a 2 após prorrogação. O torneio ficou marcado por polêmicas, como o “gol fantasma” de Geoff Hurst, e pela eliminação precoce do Brasil, então bicampeão mundial." },
    { id: 9,  ano: 1970, campeao: "Brasil",    imagem: "../imagens/copa 1970.jpg", descricao: "Realizada no México, a Copa do Mundo de 1970 é considerada uma das mais emblemáticas da história. A seleção brasileira conquistou o tricampeonato ao vencer a Itália por 4 a 1 na final, com uma equipe histórica formada por Pelé, Jairzinho, Rivellino, Gérson e Tostão. O título garantiu ao Brasil a posse definitiva da Taça Jules Rimet." },
    { id: 10, ano: 1974, campeao: "Alemanha",  imagem: "../imagens/copa 1974.jpg", descricao: "Realizada na Alemanha Ocidental, a Copa do Mundo de 1974 marcou a estreia do novo troféu da FIFA. A seleção anfitriã conquistou o título ao vencer a Holanda de Johan Cruyff por 2 a 1 na final. A edição ficou marcada pelo “futebol total” da Holanda, que revolucionou o esporte, apesar de não ter conquistado o título." },
    { id: 11, ano: 1978, campeao: "Argentina", imagem: "../imagens/copa 1978.jpg", descricao: "Realizada na Argentina, a Copa do Mundo de 1978 terminou com a conquista do primeiro título mundial dos anfitriões. A seleção argentina venceu a Holanda por 3 a 1 na final após prorrogação, em um torneio disputado durante o período da ditadura militar no país. O destaque da competição foi o atacante Mario Kempes, artilheiro e principal jogador da campanha." },
    { id: 12, ano: 1982, campeao: "Itália",    imagem: "../imagens/copa 1982.jpg", descricao: "Realizada na Espanha, a Copa do Mundo de 1982 foi a primeira a contar com 24 seleções. A Itália conquistou seu terceiro título mundial ao vencer a Alemanha Ocidental por 3 a 1 na final. Apesar do título italiano, a grande lembrança do torneio foi a seleção brasileira de Zico, Sócrates, Falcão e Júnior, considerada uma das melhores da história, mas eliminada pela Itália." },
    { id: 13, ano: 1986, campeao: "Argentina", imagem: "../imagens/copa 1986.jpg", descricao: "Realizada no México, a Copa do Mundo de 1986 foi marcada pelo brilho de Diego Maradona, que liderou a Argentina ao bicampeonato mundial. Na final, os argentinos venceram a Alemanha Ocidental por 3 a 2. O torneio ficou eternizado pelas quartas de final contra a Inglaterra, quando Maradona marcou o gol da “Mão de Deus” e o considerado gol mais bonito da história das Copas." },
    { id: 14, ano: 1990, campeao: "Alemanha",  imagem: "../imagens/copa 1990.jpg", descricao: "Realizada na Itália, a Copa do Mundo de 1990 ficou conhecida pelo futebol mais defensivo e pela baixa média de gols. A Alemanha Ocidental conquistou seu terceiro título mundial ao vencer a Argentina por 1 a 0 na final, em uma revanche da decisão de 1986. O torneio também marcou o último grande evento antes da reunificação alemã." },
    { id: 15, ano: 1994, campeao: "Brasil",    imagem: "../imagens/copa 1994.jpg", descricao: "Realizada nos Estados Unidos, a Copa do Mundo de 1994 marcou a popularização do futebol no país. O Brasil conquistou seu quarto título mundial ao vencer a Itália nos pênaltis após empate sem gols na final, realizada em Pasadena. Foi a primeira decisão de Copa do Mundo definida por penalidades, com destaque para Romário e Bebeto." },
    { id: 16, ano: 1998, campeao: "França",    imagem: "../imagens/copa 1998.jpg", descricao: "Realizada na França, a Copa do Mundo de 1998 foi a primeira a contar com 32 seleções. A seleção francesa conquistou seu primeiro título mundial ao vencer o Brasil por 3 a 0 na final, com dois gols de Zidane. A competição também ficou marcada pelo mistério envolvendo a condição física de Ronaldo antes da decisão." },
    { id: 17, ano: 2002, campeao: "Brasil",    imagem: "../imagens/copa 2002.jpg", descricao: "Realizada na Coreia do Sul e Japão, a Copa do Mundo de 2002 foi a primeira sediada na Ásia. O Brasil conquistou seu quinto título mundial ao vencer a Alemanha por 2 a 0 na final, com dois gols de Ronaldo. O atacante terminou como artilheiro da competição e liderou uma campanha perfeita da seleção brasileira." },
    { id: 18, ano: 2006, campeao: "Itália",    imagem: "../imagens/copa 2006.jpg", descricao: "Realizada na Alemanha, a Copa do Mundo de 2006 terminou com o quarto título da Itália, que venceu a França nos pênaltis após empate por 1 a 1 na final. O jogo ficou marcado pela expulsão de Zidane na sua despedida do futebol, após uma cabeçada em Materazzi. O italiano Fabio Cannavaro foi eleito o melhor jogador do torneio." },
    { id: 19, ano: 2010, campeao: "Espanha",   imagem: "../imagens/copa 2010.jpg", descricao: "Realizada na África do Sul, a Copa do Mundo de 2010 foi a primeira realizada no continente africano. A Espanha conquistou seu primeiro título mundial ao vencer a Holanda por 1 a 0 na final, com gol de Iniesta na prorrogação. A equipe espanhola dominou o torneio com seu estilo de posse de bola conhecido como “tiki-taka”." },
    { id: 20, ano: 2014, campeao: "Alemanha",  imagem: "../imagens/copa 2014.jpg", descricao: "Realizada no Brasil, a Copa do Mundo de 2014 marcou o retorno do torneio ao país após 64 anos. A Alemanha conquistou seu quarto título mundial ao vencer a Argentina por 1 a 0 na final, com gol de Mario Götze na prorrogação. O torneio também ficou marcado pela histórica derrota do Brasil por 7 a 1 para a própria Alemanha nas semifinais." },
    { id: 21, ano: 2018, campeao: "França",    imagem: "../imagens/copa 2018.jpg", descricao: "Realizada na Rússia, a Copa do Mundo de 2018 foi a primeira com uso do VAR na história do torneio. A França conquistou seu segundo título mundial ao vencer a Croácia por 4 a 2 na final. O destaque da competição foi o jovem Kylian Mbappé, que teve atuações decisivas na campanha francesa." },
    { id: 22, ano: 2022, campeao: "Argentina", imagem: "../imagens/copa 2022.jpg", descricao: "Realizada no Catar, a Copa do Mundo de 2022 foi a primeira disputada no Oriente Médio e também a primeira realizada no fim do ano, devido às altas temperaturas da região. A Argentina conquistou seu terceiro título mundial ao vencer a França nos pênaltis após empate por 3 a 3 na final. Lionel Messi foi o grande destaque do torneio e foi eleito o melhor jogador da competição, encerrando sua trajetória com o título mundial." },
    { id: 23, ano: 2026, campeao: "???",       imagem: "../imagens/copa 2026.jpg", descricao: "Está sendo realizada em três países, sendo eles: Estados Unidos, México e Canadá. O país campeão nesta edição ainda é incerto, mas o brasileiro é o último a desistir na busca pelo hexa!" }
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