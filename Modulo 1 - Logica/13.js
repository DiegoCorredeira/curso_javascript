// For clássico -> Geralemnte com iteráveis (array ou strings)
// For in -> Retorna o indice ou chave (string, array ou objetos)
// For of -> Retorna o valor em si (iteráveis, arrays ou strings)

const frutas = ["Pera", "Maçã", "Uva", "Banana", "Melão"];

// Metodo Clássico -> Contador
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// For in -> Le o indice do array e quando for um objeto, le a chave
// for (let i in frutas) {
//   console.log(frutas[i]);
// }

const pessoa = {
  nome: "João",
  sobrenome: "Silva",
  idade: 30,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
