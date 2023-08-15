/**
 * 
 * Remoção de elementos por índice:
 * Crie um array com alguns elementos.
 * Escreva uma função que remove um elemento do array dado um índice.
 * Chame a função para remover um elemento e imprima o array resultante.
 */

// Criando um array com alguns elementos
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function removerElemento(array, indice) {
    // Verificar se o indice é valido
    if (indice >= 0 && indice < array.length) {
        // Remover o elemento do array
        array.splice(indice, 1);
    }
    return array;
}

console.log(removerElemento(array, 2));
