/**
 * Atribuição via desestruturação
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

// Atribuição via desestruturação
const {
  nome = "Não declarado",
  sobrenome,
  idade,
  profissao,
  endereco: { rua, numero },
} = pessoa;

console.log(nome);
