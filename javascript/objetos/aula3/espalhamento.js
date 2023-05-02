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

function ligarParaCliente(telefoneComercial, telefoneResidencial) {
   console.log(`Ligando para ${telefoneComercial}`)
   console.log(`Ligando para ${telefoneResidencial}`)
}

// ligarParaCliente(cliente.telefone[0], cliente.telefone[1])
ligarParaCliente(...cliente.telefones)

const encomenda = {
   destinatario: cliente.nome,
   ...cliente.enderecos[0] // se refere a tudo que contém dentro da seção "enderecos" do objeto "cliente"
}
console.log(encomenda)