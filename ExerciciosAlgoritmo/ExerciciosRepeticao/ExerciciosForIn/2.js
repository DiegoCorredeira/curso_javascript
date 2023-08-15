// Iterar sobre as propriedades de um objeto

// Criando um objeto pessoa
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  cidade: "São Paulo",
};

// Iterando sobre as propriedades do objeto pessoa com o for...in
for (let propriedade in pessoa) {
  console.log(propriedade, pessoa[propriedade]);
}
