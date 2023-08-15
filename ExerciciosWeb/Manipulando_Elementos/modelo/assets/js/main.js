//pegando o elemento pelo id
let button = document.getElementById("submitButton");
let result = document.getElementById("resultado");

// adicionando um evento de click ao botão
button.addEventListener("click", function () {
  // alterando o texto do elemento
  result.textContent = "Obrigado por clicar";
});
