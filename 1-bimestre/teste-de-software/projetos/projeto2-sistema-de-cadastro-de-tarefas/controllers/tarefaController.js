const { cadastrarTarefa } = require('../services/tarefaService')
const { totalTarefas } = require('../database/tarefaDatabase')

function cadastrar(req, res) {
    const { descricao } = req.body
    const sucesso = cadastrarTarefa(descricao)

    if (!sucesso) {
        return res.status.json({
            mensagem: 'Descrição obrigatória'
        })
    }

    return res.json({
        sucesso: true
    })
}

function TotalTarefas(req, res) {
    const total = totalTarefas()
    return res.json({
        total
    })
}

module.exports = {
    cadastrar,
    TotalTarefas
}