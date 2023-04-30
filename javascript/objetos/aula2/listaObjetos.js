// forma de criar array de objetos e como acessar

const cliente = {
   nome: "João",
   idade: 24,
   email: "joao@firma.com",
   telefones: ["9900000000", "9900001111"]
} 

cliente.enderecos = [{
   rua: "R. Sei lá o que",
   numero: 9999,
   apartamento: true,
   complemento: "Apto 999",
},
]

cliente.enderecos.push({
   rua: "Mais outra sei lá",
   numero: 999,
   apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
   (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos)