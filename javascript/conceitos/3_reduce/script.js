const clientes = [
   { name: 'Danilo', score: 75 },
   { name: 'Renato', score: 56 },
   { name: 'Elias', score: 36 },
   { name: 'Wellington', score: 46 },
   { name: 'Everton', score: 46 },
]

// acc -> acumulator
// curr -> current
const clientesFinal = clientes.reduce((acc, curr) => {
   if (curr.score > 50) {
      acc.pass.push(curr)
   } else {
      acc.fail.push(curr)
   }

   return acc
}, {
   pass: [],
   fail: []
})

console.log(clientesFinal)

// o reduce percorre, manipula e retorna o que quisermos -> array, string, objetos...

const numeros = [1, 2, 3, 4, 5]  // resulta em ' - 1 - 2 - 3 - 4 - 5'

const numerosFinal = numeros.reduce((acc, curr) => {
   acc += ` - ${curr + 1}`
   return acc
}, '')

console.log(numerosFinal)