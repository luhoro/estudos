// const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json')
//     .then(resposta => resposta.json())
//     .then(json => {
//         if (json.erro) {
//             throw Error('Esse CEP não existe!')
//         } else {
//             console.log(json)
//         }
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluído'))

// console.log(consultaCEP)

async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ''

    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepJson = await consultaCep.json()

        if (consultaCepJson.erro) {
            throw Error('CEP não existente')
        }

        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')

        cidade.value = consultaCepJson.localidade
        logradouro.value = consultaCepJson.logradouro
        estado.value = consultaCepJson.uf

        return consultaCepJson
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP Inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

/*let ceps = ["01001000", "70765050", "70292110"]
let conjuntoCeps = ceps.map( valores => buscaEndereco(valores) ) //

console.log(conjuntoCeps) // resulta em promises
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)) 
 forma de lidar com várias requisições ao mesmo tempo*/

 const cep = document.getElementById('cep')
 cep.addEventListener('focusout', () => buscaEndereco(cep.value))