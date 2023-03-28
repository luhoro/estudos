
function tabuada(){
 
  let numero = parseInt(prompt('Digite qual tabuada você quer saber: '));

  const titulo = `A tabuada do número ${numero} é: `;
  document.querySelector('#titulo').innerHTML = titulo;

  for (i = 0; i <= 10; i++) {
    let resultado = numero * i
    let mensagem = `${numero} x ${i} = ${resultado} <br>`
    document.write(mensagem)
  }
  
}




// document.querySelector('#tituloh1').innerHTML = saudacao
// document.querySelector('#tituloh2').innerHTML = msgPersonalizada

