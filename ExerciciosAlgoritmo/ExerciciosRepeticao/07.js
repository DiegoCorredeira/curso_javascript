// Calcular fatorial de um número

const numero = 10;

let fatorial = 1;

for (let i = numero; i >= 1; i--) {
  fatorial *= i;
}
console.log(`Fatorial de ${numero}: ${fatorial}`);
