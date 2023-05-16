
let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false

function abrirFecharMenu() {
   if  (aberto === false) {
      aberto = true;
      menuMobile.classList.add('aberto');
      botaoMenu.innerHTML = '<img src="menu-close.svg" alt="" >';
   }  else if (aberto === true) {
      aberto = false;
      menuMobile.classList.remove('aberto');
      botaoMenu.innerHTML = '<img src="menu-open.svg" alt="" >';
   }
}


