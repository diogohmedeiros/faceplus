var melhoresAvaliacoes = document.querySelector(".melhores-avaliacoes");
const trocarFoto = document.querySelector("#trocar_foto");
const foto = document.querySelector("#foto");
const imgUser = document.querySelector("#imgUser")

var tominhasavaliacoes = document.querySelector(".tominhasavaliacoes")
var topublicacoes = document.querySelector(".topublicacoes")


tominhasavaliacoes.addEventListener("click", () => {
    window.location.href = "../usuario/avaliacoes.html"
})

topublicacoes.addEventListener("click", () => {
    window.location.href = "../usuario/index.html"
})

const idUser = JSON.parse(localStorage.getItem('id_user'));

var imagem = "";

trocarFoto.addEventListener("click", () => {
    foto.click();
});

foto.addEventListener("change", (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (data) => {
        //console.log(data.target.result);
        imagem = data.target.result;
        imgUser.src = imagem;
    }

    reader.readAsDataURL(file);
});

const escolherImagem = document.querySelector("#escolher-imagem");
const fotoPublicar = document.querySelector("#foto-publicar");
const imgPubli = document.querySelector("#imgPubli")

var imagemP = "";

escolherImagem.addEventListener("click", () => {
    fotoPublicar.click();
});

fotoPublicar.addEventListener("change", (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (data) => {
        //console.log(data.target.result);
        imagemP = data.target.result;
        imgPubli.src = imagemP;
    }

    reader.readAsDataURL(file);
});

fetch("http://10.87.207.9:8080/establishment")
.then(resp => { return resp.json(); })
.then(data => {
    data.forEach(estabelecimentos => {
        let sugestao = document.createElement("div");
        sugestao.className = "sugestao";

        let fotoEstabelecimento = document.createElement("img");
        fotoEstabelecimento.className = "foto-sugestao";            
        fotoEstabelecimento.setAttribute("src", estabelecimentos.image)
        // fotoEstabelecimento.setAttribute("src", "../assets/posts/mcdonalds.jpg")

        let nomeLocalizacao = document.createElement("div");
        nomeLocalizacao.className = "nome-localizacao";

        let nome = document.createElement("p");
        nome.innerHTML = estabelecimentos.name;
        // nome.innerHTML = "McDonalds";

        let localEstabelecimento = document.createElement("p");
        localEstabelecimento.innerHTML = estabelecimentos.location;
        // localEstabelecimento.innerHTML = "Jaguariúna";

        let avaliacao = document.createElement("p");
        if (estabelecimentos.average_rating != null) {
            avaliacao.innerHTML = estabelecimentos.average_rating + ".0";
        } else {
            avaliacao.innerHTML = "Sem avaliações";
        }

        let starIcon = document.createElement("i");
        starIcon.className = "fi fi-rr-star";

        avaliacao.appendChild(starIcon);
        nomeLocalizacao.appendChild(nome);
        nomeLocalizacao.appendChild(localEstabelecimento);
        sugestao.appendChild(fotoEstabelecimento);
        sugestao.appendChild(nomeLocalizacao);
        sugestao.appendChild(avaliacao);
        melhoresAvaliacoes.appendChild(sugestao);

        sugestao.addEventListener("click", () => {
            window.location.href = "../perfil"
        })
    })
})
