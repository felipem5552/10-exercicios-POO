class Funcionario {
  constructor(nome, salario) {
    this.nome = nome
    this.salario = salario
  }

  aumentarSalario(percentual) {
    this.salario += this.salario * (percentual / 100)
  }
}
