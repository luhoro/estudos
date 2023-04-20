
// FETCH

function transformarJson(response) {
   return response.json()
}

function exibirNaTela(dados) {
   console.log(dados)
}

function exibirErro() {
   console.log('ops, deu errooo')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

const configs = {
   method: 'GET',
   headers: { },
}

botaoCarregar.onclick = () => 
   fetch('https://jsonplaceholder.typicode.com/photos', configs)
      .then(transformarJson) // vinculado ao resolve
      .then(exibirNaTela)
      .catch(exibirErro) // vinculado ao reject



