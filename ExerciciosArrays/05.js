/**
 * Crie um array de números.
 * Crie um novo array contendo apenas os números pares do array original, usando o método filter.
 * Crie outro array com os quadrados dos números do array original, usando o método map.
 * Imprima os dois novos arrays no console.
 */

// Criando um array de numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filtrando os numeros pares
const pares = numeros.filter((numero) => numero % 2 === 0);

// Elevando os numeros ao quadrado
const quadrados = numeros.map((numero) => numero ** 2);

console.log(pares);
console.log(quadrados);
