const cliente = {
   nome: "João",
   idade: 24,
   email: "joao@firma.com",
   telefones: ["9900000000", "9900001111"]
} ;

cliente.endereco = {
   rua: "R. Sei lá o que",
   numero: 9999,
   apartamento: true,
   complemento: "Apto 999",
}

console.log(cliente.endereco.rua)