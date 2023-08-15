let form = document.getElementById("meuForm");
let input = document.getElementById("text");
let button = document.getElementById("btnEnviar");
let result = document.getElementById("result");

// criando um evento de click no botão com um preventDefault para não atualizar a página
form.addEventListener("click", function (e) {
  e.preventDefault();
  // Adicionando texto ao resultado
  result.textContent = `Você informou: ${input.value}`;
  // limpando o input
  input.value = "";
});
