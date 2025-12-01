//Exercício 03 – Classe ContaCorrente
//Atributos: numeroConta, nomeCorrentista, saldo
//Métodos: alterarNome(), depositar(), sacar()


class ContaCorrente {
  numeroConta: number
  nomeCorrentista: string
  saldo: number

  constructor(numeroConta: number, nomeCorrentista: string, saldo: number) {
    this.numeroConta = numeroConta
    this.nomeCorrentista = nomeCorrentista
    this.saldo = saldo
  }

  alterarNome(novoNome: string): void {
    this.nomeCorrentista = novoNome
  }

  depositar(valor: number): void {
    this.saldo += valor
  }

  sacar(valor: number): void {
    this.saldo -= valor
  }
}

// Exemplo de uso
const conta = new ContaCorrente(123, "João", 100)

conta.depositar(50)
conta.sacar(30)
conta.alterarNome("João da Silva")

console.log(conta)
