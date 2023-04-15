// variáveis para o formulário, o conjunto de elementos, e array vazio para armazenamento
const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = []

// Evento de envio do formulário
form.addEventListener('submit', (evento) => {
   evento.preventDefault()

   const nome = evento.target.elements['nome']
   const quantidade = evento.target.elements['quantidade']

   criaElemento(nome.value, quantidade.value)

   // forma de resetar valores do formulário após envio
   nome.value = ''
   quantidade.value = ''
})

// função para criação dos elementos
function criaElemento(nome, quantidade) {
   // cria um elemento li com classe 'item
   const novoItem = document.createElement('li')
   novoItem.classList.add('item')

   //cria o elemento número de quantidade
   const numeroItem = document.createElement('strong')
   numeroItem.innerHTML = quantidade
   novoItem.appendChild(numeroItem)

   novoItem.innerHTML += nome

   lista.appendChild(novoItem)

   // cria o objeto do conjunto de informações de cada elemento
   const itemAtual = {
      "nome": nome,
      "quantidade": quantidade
   }

   // enviando os valores de cada objeto para um array
   itens.push(itemAtual)

   // localstorage só lê elementos em string - stringfy faz essa transformação
   localStorage.setItem('item', JSON.stringify(itens))
}

