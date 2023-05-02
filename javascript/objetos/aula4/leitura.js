// função que o node permite usar para puxar o código de outro lugar
const dados = require("./cliente.json") 

console.log(dados)
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados) // transforma um objeto em string (json)

console.log(clienteEmString, typeof clienteEmString)

console.log(clienteEmString.nome)

const objetoCliente = JSON.parse(clienteEmString)
console.log(objetoCliente)