let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
   const answer = await fetch(endpointDaAPI)
   livros = await answer.json()
   let livrosComDesconto = aplicarDesconto(livros)
   exibirOsLivrosNaTela(livros)
}

