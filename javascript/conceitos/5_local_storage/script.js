/* LOCAL STORAGE */
/* Forma de armazenar informações no navegador */

const tarefas = [
   { tarefa: 'estudar js'},
   { tarefa: 'estudar node.js'},
   { tarefa: 'estudar react.js'}
]

const tarefasJson = JSON.stringify(tarefas)
localStorage.setItem('tarefas', tarefasJson)

// forma de selecionar itens do armazenamento local
const listaTarefasSalvas = localStorage.getItem('tarefas')
const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)