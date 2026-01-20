class BombaCombustivel {
  constructor(tipo, valorLitro) {
    this.tipo = tipo
    this.valorLitro = valorLitro
    this.quantidade = 100
  }

  abastecerPorValor(valor) {
    const litros = valor / this.valorLitro;
    this.quantidade -= litros
    return litros
  }

  abastecerPorLitro(litros) {
    const valor = litros * this.valorLitro;
    this.quantidade -= litros
    return valor
  }

  alterarValorLitro(valor) {
    this.valorLitro = valor
  }

  alterarQuantidade(qtd) {
    this.quantidade = qtd
  }
}
