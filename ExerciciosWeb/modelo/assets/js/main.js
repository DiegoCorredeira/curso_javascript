// Pegando elementos do HTML
const table = document.getElementById("tabuada");
const button = document.getElementById("submitButton");
const result = document.getElementById("resultado");

// Adicionando ação ao botão de submit
button.addEventListener("click", () => {
  const selectNumber = parseInt(table.value);

  // Se o valor inserido for um número, limpa o resultado e imprime a tabuada
  if (!isNaN(selectNumber)) {
    result.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
      const mult = selectNumber * i;
      result.innerHTML += `${selectNumber} x ${i} = ${mult}<br>`;
    }
    // Se nao for um número, imprime uma mensagem de erro
  } else {
    result.innerHTML = "Insira um número inteiro";
  }
});
