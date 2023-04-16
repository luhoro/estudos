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
   
   // cria o objeto do conjunto de informações de cada elemento
   const itemAtual = {
      "nome": nome.value,
      "quantidade": quantidade.value
   }

   criaElemento(itemAtual)

   // enviando os valores de cada objeto para um array
   itens.push(itemAtual)

   // localstorage só lê elementos em string - stringify faz essa transformação para objeto
   localStorage.setItem('itens', JSON.stringify(itens))

   // forma de resetar valores do formulário após envio
   nome.value = ''
   quantidade.value = ''
})

// função para criação dos elementos
function criaElemento(item) {
   // cria um elemento li com classe 'item
   const novoItem = document.createElement('li')
   novoItem.classList.add('item')

   //cria o elemento número de quantidade
   const numeroItem = document.createElement('strong')
   numeroItem.innerHTML = item.quantidade
   novoItem.appendChild(numeroItem) // anexa um elemento como filho de outro elemento

   novoItem.innerHTML += item.nome

   lista.appendChild(novoItem)

   
}

