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

for (let chave in cliente) {
   let tipo = typeof cliente[chave]
   if (tipo !== "object" && tipo !== "function") {
      console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)

   }
}