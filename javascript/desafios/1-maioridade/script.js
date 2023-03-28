
function entrar(){
  let nome = prompt("Digite o seu nome: ");
  let idade = parseInt(prompt("Digite a sua idade: "));
  
  if (nome === '' || idade === ''){
    alert('Preencha os campos corretamente!')
    return
  }

  let maioridade;

  if (idade >= 18){
    maioridade = 'maior'
  } else {
    maioridade = 'menor'
  }

  let msgPersonalizada = ''

  if (nome == 'Thomas Anderson'){
    msgPersonalizada = 'Você é personagem do filme The Matrix!'
  } 

  let saudacao = `Olá ${nome}, você é ${maioridade} de idade! ${msgPersonalizada}`

  document.querySelector('#tituloh1').innerHTML = saudacao
  document.querySelector('#tituloh2').innerHTML = msgPersonalizada

}