const links = document.querySelectorAll(".cabecalho-menu a");

function ativarLink(link) {
  const urlSite = window.location.href;
  if(urlSite.includes(link.href)) {
    link.classList.add("ativo");
  }
}


links.forEach(ativarLink)