/**
 * 
 * Conversor de temperatura: Crie um conversor de temperatura que permita ao usuário escolher entre converter Celsius para Fahrenheit ou vice-versa.
 *  O programa deve solicitar a entrada do valor da temperatura e mostrar o resultado da conversão.
 * 
 */


function c2f(celsius) {
  return celsius * 1.8 + 32;
}

function f2c(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
const choice = 1;

if (choice == "1") {
  const tempCelsius = 32;
  const tempFahrenheit = c2f(tempCelsius);
  console.log(`Temperatura de celsius para fahrenheit: ${tempFahrenheit} `);
} else if (choice == "2") {
  const tempFahrenheit = 80;
  const tempCelsius = f2c(tempFahrenheit);
} else {
  console.log("Inválido.");
}
