/**
 * Concatenação e divisão:
 * Crie dois arrays de strings: um com nomes de frutas e outro com nomes de animais.
 * Concatene os dois arrays em um terceiro array.
 * Use o método join para criar uma única string com os elementos do terceiro array separados por vírgula.
 */

// Criando dois arrays de strings
const frutas = ["banana", "maçã", "laranja", "mamão", "melancia"];
const animais = ["cachorro", "gato", "papagaio", "tartaruga", "coelho"];

// Concatenando os dois arrays em um terceiro array
const frutasEAnimais = frutas.concat(animais);

// Imprimindo o array
console.log(frutasEAnimais);

