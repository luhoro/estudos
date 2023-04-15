// JSON - JAVASCRIPT OBJECT NOTATION

const objeto = {
   nome: 'Daniel',
   idade: 23
}

console.log(objeto) // resulta no objeto

// Transforma o objeto literal em JSON
const json = JSON.stringify(objeto) 

console.log(json) 

// Transforma o JSON em objeto literal
const jsonParse = JSON.parse(json)

console.log(jsonParse.idade)