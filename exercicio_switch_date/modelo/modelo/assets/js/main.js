function dataEHora() {
  let dataeHora = document.getElementById("dataeHora");
  let dataAtual = new Date();
  let formataData = dataAtual.toLocaleDateString("pt-BR", {
    dateStyle: "full",
  });
  let formataHora = dataAtual.toLocaleTimeString("pt-BR", {
    timeStyle: "short",
  });

  let dataeHoraFormatada = `${formataData} - ${formataHora}`;

  dataeHora.textContent = dataeHoraFormatada;
}
dataEHora();
setInterval(dataEHora, 1000);
