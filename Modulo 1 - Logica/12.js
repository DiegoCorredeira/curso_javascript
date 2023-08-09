/**
 * for - Clássico - Estrutura de Repetição
 */

// i -> index
for (let i = 0; i <= 100; i++) {
  const par = i % 2 === 0 ? "par" : "impar";
  console.log(`O número ${i} é ${par}`);
}


// percorrendo arrays
const frutas = ["Maçã", "Pêra", "Uva"];
for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element);
}
