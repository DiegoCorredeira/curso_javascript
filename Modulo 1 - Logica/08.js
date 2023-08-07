/**
 *
 * Switch Case
 *
 */

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaLog;
  switch (diaSemana) {
    case 0:
      diaSemanaLog = "Domingo";
      return diaSemanaLog;
    case 1:
      diaSemanaLog = "Segunda";
      return diaSemanaLog;
    case 2:
      diaSemanaLog = "Terça";
      return diaSemanaLog;
    case 3:
      diaSemanaLog = "Quarta";
      return diaSemanaLog;
    case 4:
      diaSemanaLog = "Quinta";
      return diaSemanaLog;
    case 5:
      diaSemanaLog = "Sexta";
      return diaSemanaLog;
    case 6:
      diaSemanaLog = "Sabado";
      return diaSemanaLog;
    default:
      diaSemanaLog = "Dia inválido";
      return diaSemanaLog;
  }
}
const data = new Date('2023-08-07 16:37')
let diaSemana = data.getDay()

const diaSemanaLog = getDiaSemanaTexto(diaSemana);

console.log(diaSemanaLog);
