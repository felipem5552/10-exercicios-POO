//Crie uma classe que modele um aluno de academia:
//Atributos: Nome, data de nascimento, peso e altura.
//Métodos: Calcula idade.

class AlunoAcademia {
  nome: string
  anoNascimento: number
  peso: number
  altura: number

  constructor(nome: string, anoNascimento: number, peso: number, altura: number) {
    this.nome = nome
    this.anoNascimento = anoNascimento
    this.peso = peso
    this.altura = altura
  }

  calculaIdade(): number {
    const anoAtual = new Date().getFullYear()
    return anoAtual - this.anoNascimento
  }
}

// Exemplo de uso 
const aluno = new AlunoAcademia("João", 2000, 70, 1.75)

console.log("Nome:", aluno.nome);
console.log("Idade:", aluno.calculaIdade())
