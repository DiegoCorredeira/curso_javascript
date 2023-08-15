/**
 * Calculadora de IMC (Índice de Massa Corporal):
 * Crie uma calculadora que receba o peso e a altura de uma pessoa e calcule o seu Índice de Massa Corporal (IMC).
 *  O programa deve mostrar uma mensagem indicando se a pessoa está abaixo do peso, no peso normal, com sobrepeso ou obesa.
 */


const peso = 80;
const altura = 1.87;
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obeso");
}