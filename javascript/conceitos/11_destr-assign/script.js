
// DESTRUCTURING ASSIGNMENT - desestruturação de atribuição

const object = {
   nome: 'Diego',
   idade: 35,
}

// forma de criar mais de uma variável ao mesmo tempo
const { 
   nome: nomeDoUsuario, // forma de atribuir o valor de uma variável para outra
   idade
} = object

// console.log(nomeDoUsuario)




function transformarJson(response) {
   return response.json()
}

function exibirErro() {
   console.log('ops, deu errooo')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
   const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(transformarJson) 
      .catch(exibirErro)
   
   const { name, email, phone} = dados

   console.log(name, email, phone)
}

