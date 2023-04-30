// propriedade que guarda um função

const cliente = {
   nome: "João",
   idade: 24,
   email: "joao@firma.com",
   telefones: ["9900000000", "9900001111"],
   saldo: 200,
   efetuaPagamento: function (valor) {
      if (valor > this.salvo) {
         console.log("Saldo insuficiente")
      } else {
         this.saldo -= valor
         console.log(`Pagamwento realizado. Novo saldo: ${this.saldo}`)
      }
   }
} 

cliente.efetuaPagamento(25)