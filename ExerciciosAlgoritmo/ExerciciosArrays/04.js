/**
 * Crie um array de números aleatórios.
 * Escreva uma função que encontre o maior valor no array.
 * Escreva outra função que encontre o menor valor no array.
 * Chame as duas funções e imprima os resultados no console.
 *
 */

const random = [4, 6, 7, 9, 100, 200, 4324, 54363];

function maiorValor(array) {
    // Definir uma variavel para guardar o maior valor
  let maior = 0;
  // Percorrer o array e comparar cada valor com a variavel definida acima
  for (let i = 0; i < array.length; i++) {
    // Se o valor do array for maior que a variavel, substituir o valor da variavel
    if (array[i] > maior) maior = array[i];
  }
  return maior;
}
console.log(maiorValor(random));
