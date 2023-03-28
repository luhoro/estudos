let numero = document.querySelector('#numero')


let botaoMenos = document.querySelector('#subtracao')
let botaoMais = document.querySelector('#adicao')

botaoMenos.onclick = function(){
   numero.innerHTML--
}

botaoMais.onclick = function(){
   numero.innerHTML++
}