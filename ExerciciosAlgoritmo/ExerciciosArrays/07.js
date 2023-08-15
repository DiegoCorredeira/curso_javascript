/*
 *Verificar a existência de um elemento:
 * Crie um array com alguns números.
 * Escreva uma função que verifica se um determinado número está presente no array.
 * Chame a função para verificar se um número está presente e imprima o resultado. 
 * */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function verificarNumero(array, numero) {
    // Percorrer o array
    for (let i = 0; i < array.length; i++) {
        // Verificar se o numero existe no array
        if (array[i] === numero) return true;
    }
    return false;
}

console.log(verificarNumero(numeros, 10));