/**
 * Verificador de idade:
 * Crie um programa que solicite ao usuário sua data de nascimento e, com base na data atual, determine sua idade.
 * Em seguida, exiba uma mensagem indicando se a pessoa é menor de idade ou maior de idade.
 */

const dataNascimento = new Date(1994, 10, 30);
const dataAtual = new Date();
const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
