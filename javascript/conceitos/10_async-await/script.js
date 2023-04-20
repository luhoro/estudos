
// ASYNC | AWAIT

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

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
   const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
      .then(transformarJson) 
      .catch(exibirErro)
   
      console.log(dados)
}

