const tarefas = []

function salvarTarefa(descricao) {
  tarefas.push(descricao)
}
function totalTarefas() {
  return tarefas.length
}
function limpar() {
  tarefas.length = 0
}

module.exports = {
  salvarTarefa,
  totalTarefas,
  limpar
}