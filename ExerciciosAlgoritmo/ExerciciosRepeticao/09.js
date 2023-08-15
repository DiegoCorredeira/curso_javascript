// Exemplo 9: Verificar se um número é primo
const numero = 17;

let ehPrimo = true;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    ehPrimo = false;
  }
}
console.log(`${numero} é primo? ${ehPrimo}`);
