/**
 * Crie uma função que receba um objeto pessoa desestruturado
 * como parâmetro e retorne uma string formatada com as informações pessoais (nome, sobrenome, idade e profissão).
 */

function pessoaInfo({ nome, sobrenome, idade, profissao }) {
  return `Nome: ${nome} ${sobrenome}, Idade: ${idade}, Profissão: ${profissao}`;
}
console.log(
  pessoaInfo({
    nome: "Diego",
    sobrenome: "Corredeira",
    idade: 28,
    profissao: "Programador",
  })
);
