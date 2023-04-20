
// promises - promessa

function exibirNaTela(dados) {
   console.log('exibir na tela', dados)
}

function exibirErro() {
   console.log('ops, deu errooo')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => 
   fetch('https://jsonplaceholder.typicode.com/photos', 'GET')
      .then(exibirNaTela) // vinculado ao resolve
      .catch(exibirErro) // vinculado ao reject


// Função assíncrona
function fetch(url, method) {
   return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest()

      xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) { // se a requisição der certo, fazer..
            const response = JSON.parse(this.responseText)

            resolve(response) // vinculado ao THEN
         }

         if (this.status === 404) { // se der erro, fazer...
            reject() // vinculado ao CATCH
         }
      }

      // Forma de realizar a requisição de uma API
      xhttp.open(method, url, true )
      xhttp.send()
   })

   
}



