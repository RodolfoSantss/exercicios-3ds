const validarPedido = require("../index")

test("Pedido válido deve retornar true", () => {
    const pedido = {
        cliente: "Carlos",
        total: 10,
        itens: ["Produto 1 , Produto 2"]
    }
    expect(validarPedido(pedido)).toBe(true)
})


test("Pedido com total 0 deve retornar false", () => {
    const pedido = {
        cliente: "Carlos",
        total: 0,
        itens: ["Produto 1 , Produto 2"]
    }
    expect(validarPedido(pedido)).toBe(false)
})

test("Pedido sem cliente deve retornar false", () => {
    const pedido = {
        cliente: "",
        total: 10,
        itens: ["Produto 1 , Produto 2"]
    }
    expect(validarPedido(pedido)).toBe(false)
})

test("Pedido sem itens deve retornar false", () => {
    const pedido = {
        cliente: "Carlos",
        total: 10,
        itens: []
    }
    expect(validarPedido(pedido)).toBe(false)
})