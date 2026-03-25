const { salvarTarefa, listarTarefas } = require('../database/tarefaDatabase')

function cadastrarTarefa(descricao) {
  if (!descricao) {
    return false
  }

  salvarTarefa(descricao)
  return true
}

function totalTarefas() {
  return listarTarefas().length
}

module.exports = {
  cadastrarTarefa,
  totalTarefas
}