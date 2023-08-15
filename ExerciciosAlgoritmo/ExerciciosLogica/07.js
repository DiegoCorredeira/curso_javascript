/*
 * Acesse e imprima no console a rua e o número do endereço da pessoa.
 */

const pessoa = {
  nome: "Diego",
  sobrenome: "Corredeira",
  idade: 28,
  profissao: "Programador",
  endereco: {
    rua: "Av Brasil",
    numero: 840,
  },
};

const {rua, numero} = pessoa.endereco;

console.log(`Endereço: ${rua} ${numero}`);