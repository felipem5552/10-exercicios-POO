//Exercício 04 – Classe Televisor
//Funcionalidades:
//Mudar canal
//Aumentar e diminuir volume
//Regras:
//Canal e volume devem se manter dentro de faixas válidas

class Televisor {
  canal: number
  volume: number

  constructor() {
    this.canal = 1      // canal inicial
    this.volume = 10    // volume inicial
  }

  mudarCanal(novoCanal: number): void {
    if (novoCanal >= 1 && novoCanal <= 100) {
      this.canal = novoCanal
    } else {
      console.log("Canal inválido")
    }
  }

  aumentarVolume(): void {
    if (this.volume < 50) {
      this.volume++
    } else {
      console.log("Volume máximo atingido")
    }
  }

  diminuirVolume(): void {
    if (this.volume > 0) {
      this.volume--
    } else {
      console.log("Volume mínimo atingido")
    }
  }
}

// -------- Exemplo de uso --------
const tv = new Televisor()

tv.mudarCanal(25)
tv.aumentarVolume()
tv.diminuirVolume()

console.log("Canal atual:", tv.canal)
console.log("Volume atual:", tv.volume)
