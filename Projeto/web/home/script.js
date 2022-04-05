var listaEstabelecimentos = document.querySelector(".lista-estabelecimentos");
// var nav =  = document.querySelector(

fetch("http://10.87.207.9:8080/establishment")
.then(resp => { return resp.json(); })
.then(data => {
    data.forEach(estabelecimentos => {
        let card = document.createElement("div");
        card.className = "card-estabelecimentos";

        let fotoEstabelecimento = document.createElement("img");
        fotoEstabelecimento.className = "foto-estabelecimento";            
        fotoEstabelecimento.setAttribute("src", estabelecimentos.image)
        // fotoEstabelecimento.setAttribute("src", "../assets/posts/mcdonalds.jpg")

        let nomeLocalizacao = document.createElement("div");
        nomeLocalizacao.className = "nome-localizacao";

        let nomeEstabelecimento = document.createElement("p");
        nomeEstabelecimento.innerHTML = estabelecimentos.name;
        // nomeEstabelecimento.innerHTML = "NeyLanches";

        let localizacao = document.createElement("div");
        localizacao.className = "localizacao";

        let localEstabelecimento = document.createElement("p");
        localEstabelecimento.innerHTML = estabelecimentos.location;
        // localEstabelecimento.innerHTML = "Jaguariúna";

        let localIcon = document.createElement("i");
        localIcon.className = "fi fi-rs-marker";

        let avaliacaoAcessilbilidade = document.createElement("div");
        avaliacaoAcessilbilidade.className = "avaliacao-acessilbilidade";

        let avaliacao = document.createElement("div");
        avaliacao.className = "avaliacao";

        let starIcon = document.createElement("i");
        starIcon.className = "fi fi-rr-star";

        let avaliacaoP = document.createElement("p");
        if (estabelecimentos.average_rating != null) {
            avaliacaoP.innerHTML = estabelecimentos.average_rating + ".0";
        } else {
            avaliacaoP.innerHTML = "Sem avaliações";
        }
            
        let tipoAcessibilidade = document.createElement("div");
        tipoAcessibilidade.className = "tipo-acessibilidade";

        let cadeiraIcon = document.createElement("img");
        cadeiraIcon.className = "acessibilidade-icon";    
        cadeiraIcon.setAttribute("src", "../assets/icons/cadeira-de-rodas.svg")

        let olhosIcon = document.createElement("img");
        olhosIcon.className = "acessibilidade-icon";  
        olhosIcon.setAttribute("src", "../assets/icons/olhos-cruzados.svg")

        tipoAcessibilidade.appendChild(olhosIcon);
        tipoAcessibilidade.appendChild(cadeiraIcon);
        avaliacao.appendChild(starIcon);
        avaliacao.appendChild(avaliacaoP);
        avaliacaoAcessilbilidade.appendChild(avaliacao);
        avaliacaoAcessilbilidade.appendChild(tipoAcessibilidade);

        localizacao.appendChild(localIcon);
        localizacao.appendChild(localEstabelecimento);
        nomeLocalizacao.appendChild(nomeEstabelecimento);
        nomeLocalizacao.appendChild(localizacao);
        card.appendChild(fotoEstabelecimento);
        card.appendChild(nomeLocalizacao);
        card.appendChild(avaliacaoAcessilbilidade);
        listaEstabelecimentos.appendChild(card);
        
        card.addEventListener("click", () => {
            window.location.href = "../perfil"
        })
    })
})

        // let card = document.createElement("div");
        // card.className = "card-estabelecimentos";

        // let fotoEstabelecimento = document.createElement("img");
        // fotoEstabelecimento.className = "foto-estabelecimento";            
        // // fotoEstabelecimento.setAttribute("src", estabelecimentos.image)
        // fotoEstabelecimento.setAttribute("src", "../assets/posts/mcdonalds.jpg")

        // let nomeLocalizacao = document.createElement("div");
        // nomeLocalizacao.className = "nome-localizacao";

        // let nomeEstabelecimento = document.createElement("p");
        // // nomeEstabelecimento.innerHTML = estabelecimentos.name;
        // nomeEstabelecimento.innerHTML = "NeyLanches";

        // let localizacao = document.createElement("div");
        // localizacao.className = "localizacao";

        // let localEstabelecimento = document.createElement("p");
        // // localEstabelecimento.innerHTML = estabelecimentos.location;
        // localEstabelecimento.innerHTML = "Jaguariúna";

        // let localIcon = document.createElement("i");
        // localIcon.className = "fi fi-rs-marker";


        // let avaliacaoAcessilbilidade = document.createElement("div");
        // avaliacaoAcessilbilidade.className = "avaliacao-acessilbilidade";

        // let avaliacao = document.createElement("div");
        // avaliacao.className = "avaliacao";

        // let starIcon = document.createElement("i");
        // starIcon.className = "fi fi-rr-star";

        // let avaliacaoP = document.createElement("p");
        // // localEstabelecimento.innerHTML = estabelecimentos.location;
        // avaliacaoP.innerHTML = "4.0";
            
        // let tipoAcessibilidade = document.createElement("div");
        // tipoAcessibilidade.className = "tipo-acessibilidade";

        // let cadeiraIcon = document.createElement("img");
        // cadeiraIcon.className = "acessibilidade-icon";    
        // cadeiraIcon.setAttribute("src", "../assets/icons/cadeira-de-rodas.svg")

        // let olhosIcon = document.createElement("img");
        // olhosIcon.className = "acessibilidade-icon";  
        // olhosIcon.setAttribute("src", "../assets/icons/olhos-cruzados.svg")

        // tipoAcessibilidade.appendChild(olhosIcon);
        // tipoAcessibilidade.appendChild(cadeiraIcon);
        // avaliacao.appendChild(starIcon);
        // avaliacao.appendChild(avaliacaoP);
        // avaliacaoAcessilbilidade.appendChild(avaliacao);
        // avaliacaoAcessilbilidade.appendChild(tipoAcessibilidade);

        // localizacao.appendChild(localIcon);
        // localizacao.appendChild(localEstabelecimento);
        // nomeLocalizacao.appendChild(nomeEstabelecimento);
        // nomeLocalizacao.appendChild(localizacao);
        // card.appendChild(fotoEstabelecimento);
        // card.appendChild(nomeLocalizacao);
        // card.appendChild(avaliacaoAcessilbilidade);
        // listaEstabelecimentos.appendChild(card);


