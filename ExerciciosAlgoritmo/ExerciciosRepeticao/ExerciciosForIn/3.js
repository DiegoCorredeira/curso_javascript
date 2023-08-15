// Calcular a soma dos valores de um objeto

const valores = {
  a: 10,
  b: 30,
  c: 20,
  d: 35,
};

let soma = 0;

for (let valor in valores) {
  soma += valores[valor];
}
console.log(`A soma dos valores é ${soma}`);
