class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

class Livro {
  constructor(titulo) {
    this.titulo = titulo
    this.disponivel = true
  }
}

class Emprestimo {
  constructor(livro, pessoa) {
    if (!livro.disponivel) {
      console.log("Livro indisponível")
      return
    }
    this.livro = livro
    this.pessoa = pessoa
    livro.disponivel = false
  }
}


