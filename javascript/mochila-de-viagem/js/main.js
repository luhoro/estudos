// variáveis para o formulário, o conjunto de elementos, e array para armazenamento dos itens
const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []

// percorrer a lista de itens e garantir a exibição ao atualizar página
itens.forEach( (elemento) => {
   criaElemento(elemento)
})

// Evento de envio do formulário
form.addEventListener('submit', (evento) => {
   evento.preventDefault()

   const nome = evento.target.elements['nome']
   const quantidade = evento.target.elements['quantidade']

   const existe = itens.find(elemento => elemento.nome === nome.value) // confere o elemento nome no array de itens

   const itemAtual = { // cria o objeto do conjunto de informações de cada elemento
      "nome": nome.value,
      "quantidade": quantidade.value
   }

   if (existe) {  // determina se o item vai ser sobreposto ou não
      itemAtual.id = existe.id

      atualizaElemento(itemAtual)
      itens[existe.id] = itemAtual
   } else {
      itemAtual.id = itens.length

      criaElemento(itemAtual)
      itens.push(itemAtual)
   }
   
   itens.push(itemAtual) // enviando os valores de cada objeto para um array

   // localstorage só lê elementos em string - stringify faz essa transformação para objeto
   localStorage.setItem('itens', JSON.stringify(itens))

   // forma de resetar valores do formulário após envio
   nome.value = ''
   quantidade.value = ''
})

function criaElemento(item) { // função para criação dos elementos
   const novoItem = document.createElement('li') // cria um elemento li com classe 'item
   novoItem.classList.add('item')
   
   const numeroItem = document.createElement('strong') //cria o elemento número de quantidade
   numeroItem.innerHTML = item.quantidade // 
   numeroItem.dataset.id = item.id
   novoItem.appendChild(numeroItem) // anexa um elemento como filho de outro elemento

   novoItem.innerHTML += item.nome

   lista.appendChild(novoItem)
}

function atualizaElemento (item) { 
   document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade
}