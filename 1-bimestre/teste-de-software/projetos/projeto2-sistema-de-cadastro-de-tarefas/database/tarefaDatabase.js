let tarefas = []

function salvarTarefa(descricao) {
  tarefas.push(descricao)
}

function listarTarefas() {
  return tarefas
}

function limparBanco() {
  tarefas = []
}

module.exports = {
  salvarTarefa,
  listarTarefas,
  limparBanco
}