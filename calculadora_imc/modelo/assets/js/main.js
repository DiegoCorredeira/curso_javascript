function calcimc() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const imc = peso / (altura * altura);
  let result;

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para peso e altura (maiores que zero).";
    return false; 
}

  if (imc < 18.5) {
    result = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 25) {
    result = "Peso normal";
  } else if (imc >= 25 && imc <= 30) {
    result = "Sobrepeso";
  } else if (imc > 30 && imc <= 35) {
    result = "Obesidade";
  } else {
    result = "Obesidade Mórbida";
  }
  const imcFormatado = imc.toFixed(2);
  document.getElementById(
    "resultado"
  ).innerHTML = `Seu IMC: ${imcFormatado}. ${result}`;
  return false;
}
