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





initLinkAtivo();
ativarElementosByParametros();
mostrarElementosAoClick();

