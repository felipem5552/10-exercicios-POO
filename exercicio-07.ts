class ContaInvestimento {
  constructor(saldo, taxaJuros) {
    this.saldo = saldo
    this.taxaJuros = taxaJuros
  }

  adicionarJuros() {
    this.saldo += this.saldo * this.taxaJuros
  }
}

// Teste
const conta = new ContaInvestimento(1000, 0.10)
for (let i = 0; i < 5; i++) {
  conta.adicionarJuros()
}
console.log(conta.saldo)
