//Encontrar a chave de um valor específico em um objeto

const notas = {
  matematica: 7,
  portugues: 8,
  ingles: 9,
};

buscarValor = 9
notaEncontrada = ""

for (let nota in notas) {
  if (notas[nota] == buscarValor) {
    notaEncontrada = nota
  }
}
console.log(`A nota ${buscarValor} foi encontrada na matéria ${notaEncontrada}`);
