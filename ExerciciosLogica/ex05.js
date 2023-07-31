/**
 * 
 * Jogo de adivinhação: Elabore um jogo de adivinhação em que o computador gera um número aleatório entre 1 e 100 e o usuário precisa adivinhar qual é esse número.
 *  O programa deve fornecer dicas (maior ou menor) até que o usuário acerte o número.
 * 
 * 
 */


function jogoAdivinhacao() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let chance = 0

  while (true) {
    const guess = parseInt(prompt("Digite um número de 1 a 100: "));

    if (isNaN(guess)){
        alert('Informe um número válido.')
    } else{
        chance++
    }

    if(guess === randomNumber){
        alert(`Você acertou em ${chance} tentativas!`)
        break
    }else if (palpite < randomNumber){
        alert(`O número é maior. Tente novamente.`)
    } else{
        alert(`O número é menor. Tente novamente.`)
    }
    
  }
}
