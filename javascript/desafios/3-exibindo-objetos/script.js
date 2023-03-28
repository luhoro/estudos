
let listaAtores = [
  {
    nome: 'Keanu Reeves',
    personagem: 'John Wick',
    filme: 'John Wick 4',
  },
  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars IV - VI',
  },
  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O início',
  }
]





for (i = 0; i < listaAtores.length; i++) {

let frase = `
  <div>
    <h1> ${listaAtores[i].nome} </h1> <br>
    <p> Interpreta o personagem ${listaAtores[i].personagem} no filme ${listaAtores[i].filme}. </p> 
  </div>  
`
document.write(frase)

}


