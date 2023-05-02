const cliente = {
   nome: "João",
   idade: 24,
   email: "joao@firma.com",
   telefones: ["9900000000", "9900001111"]
} 

cliente.enderecos = [
   {
      rua: "R. Sei lá o que",
      numero: 9999,
      apartamento: true,
      complemento: "Apto 999",
   },
]

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
   console.error("ERRO. É necessário ter um endereço cadastrado")
}