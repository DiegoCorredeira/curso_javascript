/**
 *
 * Switch Case
 *
 */

const data = new Date();
const diaSemana = data.getDay();

switch (diaSemana) {
  case 0:
    diaSemanaLog = "Domingo";
    break;
  case 1:
    diaSemanaLog = "Segunda";
    break;
  case 2:
    diaSemanaLog = "Terça";
    break;
  case 3:
    diaSemanaLog = "Quarta";
    break;
  case 4:
    diaSemanaLog = "Quinta";
    break;
  case 5:
    diaSemanaLog = "Sexta";
    break;
  case 6:
    diaSemanaLog = "Sabado";
    break;
  default:
    diaSemanaLog = "Dia inválido";
    break;
}
console.log(diaSemanaLog);