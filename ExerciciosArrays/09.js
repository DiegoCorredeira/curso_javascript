/**
 * Contagem de elementos:
 * Crie um array com várias repetições do mesmo valor.
 * Escreva uma função que conte quantas vezes esse valor se repete no array.
 * Chame a função e imprima o resultado.
 */

// Criando um array com varias repetições do mesmo valor
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

function contarElementos(array, elemento) {
    // Variavel para contar quantas vezes o elemento se repete
    let contador = 0;
    // Percorrer o array
    for (let i = 0; i < array.length; i++) {
        // Verificar se o elemento existe no array
        if (array[i] === elemento) contador++;
    }
    return contador;
}
console.log(contarElementos(array, 1));