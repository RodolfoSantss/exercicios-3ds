const { cadastrarTarefa } = require('../services/tarefaService')
const { totalTarefas, limparBanco } = require('../database/tarefaDatabase')

beforeEach(() => {
  limparBanco()
})

test("Banco começa vazio", () => {
  expect(totalTarefas()).toBe(0)
})

test("Cadastra tarefa", () => {
  const resultado = cadastrarTarefa("Limpar a casa")
  expect(resultado).toBe(true)
  expect(totalTarefas()).toBe(1)
})

test("Não cadastra tarefa sem descrição", () => {
  const resultado = cadastrarTarefa()
  expect(resultado).toBe(false)
  expect(totalTarefas()).toBe(0)
})