const clientes = [
   { name: 'Fulano', lastname: 'Da Silva', age: 25 },
   { name: 'Ciclano', lastname: 'Santos', age: 16 },
   { name: 'Beltrano', lastname: 'Moreira', age: 36 },
]

const clientesMaiores = clientes.filter( cliente => cliente.age <= 18)

console.log(clientesMaiores)