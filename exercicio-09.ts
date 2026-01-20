class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
  }
}

class ItemPedido {
  constructor(produto, quantidade) {
    this.produto = produto
    this.quantidade = quantidade
  }
}

class Pedido {
  constructor(formaPagamento) {
    this.itens = []
    this.formaPagamento = formaPagamento
  }

  adicionarItem(item) {
    this.itens.push(item)
  }

  total() {
    return this.itens.reduce(
      (soma, item) => soma + item.produto.preco * item.quantidade,
      0
    )
  }
}
