const { salvarTarefa } = require('../database/tarefaDatabase')

function cadastrarNovaTarefa(descricao) {
  if (!descricao) {
    return false
  }

salvarTarefa(descricao)
  return true
}

module.exports = {
  cadastrarNovaTarefa
}