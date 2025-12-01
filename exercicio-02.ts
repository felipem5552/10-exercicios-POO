//Classe AvaliacaoFisica
//Atributos: idMatricula, dataMatricula, aluno, avaliacoesFisicas
//Métodos:
//Mostrar informações do aluno
//Informações da última avaliação
//Informações de uma avaliação específica


class AvaliacaoFisica {
  idMatricula: number
  dataMatricula: number
  aluno: string
  avaliacoesFisicas: string[]

  constructor(idMatricula: number, dataMatricula: number, aluno: string) {
    this.idMatricula = idMatricula
    this.dataMatricula = dataMatricula
    this.aluno = aluno
    this.avaliacoesFisicas = []
  }

  adicionarAvaliacao(avaliacao: string): void {
    this.avaliacoesFisicas.push(avaliacao)
  }

  mostrarInformacoesDoAluno(): void {
    console.log("Aluno:", this.aluno)
    console.log("ID Matrícula:", this.idMatricula)
    console.log("Ano da Matrícula:", this.dataMatricula)
  }

  mostrarUltimaAvaliacao(): void {
    if (this.avaliacoesFisicas.length === 0) {
      console.log("Nenhuma avaliação registrada.")
      return
    }

    const ultima = this.avaliacoesFisicas[this.avaliacoesFisicas.length - 1]
    console.log("Última avaliação:", ultima)
  }

  mostrarAvaliacaoEspecifica(indice: number): void {
    if (indice < 0 || indice >= this.avaliacoesFisicas.length) {
      console.log("Índice inválido.")
      return
    }

    console.log("Avaliação:", this.avaliacoesFisicas[indice])
  }
}

// --------- Exemplo de uso ---------
const avaliacao = new AvaliacaoFisica(123, 2024, "João da Silva")

avaliacao.adicionarAvaliacao("Peso: 70kg | Altura: 1.75")
avaliacao.adicionarAvaliacao("Peso: 72kg | Altura: 1.75")

avaliacao.mostrarInformacoesDoAluno()

avaliacao.mostrarUltimaAvaliacao()

avaliacao.mostrarAvaliacaoEspecifica(0)
