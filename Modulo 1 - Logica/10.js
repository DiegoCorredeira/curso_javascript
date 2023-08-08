/**
 *
 * Atribuição via desestruturação (Arrays)
 *
 */

//           valor != indice
//               0, 1, 2, 3, 4, 5, 6, 7, 8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Atribuição via desestruturação
// ... = rest operator, spread operator
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

const arrays = [

  [1, 2, 3], // indice 0 
  [4, 5, 6], // indice 1
  [7, 8, 9], // indice 2
];

console.log(arrays[1][2]);