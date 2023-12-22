function initLinkAtivo() {
  const links = document.querySelectorAll(".cabecalho-menu a");
  if(links.length) {

    function ativarLink(link) {
      const urlSite = window.location.href;
      if(urlSite.includes(link.href)) {
        link.classList.add("ativo");
      }
    }
    links.forEach(ativarLink)
  }
}


function ativarElementosByParametros() {
  const parametros = new URLSearchParams(location.search);

    parametros.forEach((item) => {
      const elemento = document.getElementById(item);
      if(elemento) {
        elemento.checked = true;
      }
    })
}


function mostrarElementosAoClick() {
    const perguntaFrequenteLista = document.querySelectorAll(".perguntas-item dt");

    if(perguntaFrequenteLista.length) {
    
      perguntaFrequenteLista[0].nextElementSibling.classList.add("ativo");
    
      function initItem() {
        this.nextElementSibling.classList.toggle("ativo");
      } 
    
      perguntaFrequenteLista.forEach((item) => {
        item.addEventListener("click", initItem)
      })
    }
}

function trocarImagemGaleria() {
  const galeria = document.querySelectorAll(".bicicleta-imagens img");
  const galeriaContainer = document.querySelector(".bicicleta-imagens");
  
  if(galeria.length) {
    function trocarImagem(event) {
      const img = event.currentTarget;
      const media = matchMedia("(min-width: 922px)").matches;
      if(media) {
        galeriaContainer.prepend(img)
     }
    }
  }
    galeria.forEach((item) => {
      item.addEventListener("click", trocarImagem)
    })
}

  
initLinkAtivo();
ativarElementosByParametros();
mostrarElementosAoClick();
trocarImagemGaleria();


//animation 

if(window.SimpleAnime) {
  new SimpleAnime();
}
