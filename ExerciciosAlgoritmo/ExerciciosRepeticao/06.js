// Contar o número de vogais em uma string

const texto = "Hello World!";

let contadorVogal = 0;

for (let i = 0; i < texto.length; i++) {
  const char = texto[i].toLowerCase();
  if ("aeiou".includes(char)) {
    contadorVogal++;
  }
}
console.log(`Número de vogal: ${contadorVogal}`);