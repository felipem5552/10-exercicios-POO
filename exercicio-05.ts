class Macaco {
  nome: string
  bucho: string[]

  constructor(nome: string) {
    this.nome = nome
    this.bucho = []
  }

  comer(alimento: string): void {
    if (alimento === this.nome) {
      console.log("Um macaco não pode comer ele mesmo")
      return
    }

    this.bucho.push(alimento)
    console.log(`${this.nome} comeu ${alimento}`)
  }

  verBucho(): void {
    console.log(`Bucho de ${this.nome}:`, this.bucho)
  }

  digerir(): void {
    if (this.bucho.length === 0) {
      console.log(`${this.nome} não tem nada no bucho`)
      return
    }

    this.bucho = []
    console.log(`${this.nome} digeriu tudo`)
  }
}

//Teste Interativo 
const macaco1 = new Macaco("Chico)
const macaco2 = new Macaco("Banano")

// Alimentar 3 vezes
macaco1.comer("Banana")
macaco1.verBucho()

macaco1.comer("Maçã")
macaco1.verBucho()

macaco1.comer("Pêra")
macaco1.verBucho()

// Tentando um macaco comer o outro
macaco1.comer("Banano") // tentativa de canibalismo

macaco1.verBucho()
