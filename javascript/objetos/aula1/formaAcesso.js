// UTILIZANDO O PONTO
const cliente = {
  nome: "André",
  idade: 34,
  cpf: "00000000099",
  email: "andre@algo.com",
};

console.log(`O nome do cliente é ${cliente.nome}.`);

console.log(
  `Os três primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`
);

// UTILIZANDO OS COLCHETES
const cliente2 = {
  nome: "Mário",
  idade: 25,
  cpf: "12373682546",
  email: "andre@algo.com",
};

console.log(
  `O nome do cliente é ${cliente2["nome"]},e tem ${cliente2["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
