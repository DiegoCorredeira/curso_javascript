// Exemplo 8: Imprimir uma série de Fibonacci

const fibonnacci = 10;

let arrayFibonacci = [0, 1];

for (let i = 2; i <= fibonnacci; i++) {
  arrayFibonacci.push(arrayFibonacci[i - 2] + arrayFibonacci[i - 1]);
}

console.log(arrayFibonacci);
