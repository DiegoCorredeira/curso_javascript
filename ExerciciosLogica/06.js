function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());

  const hora = zeroAEsquerda(data.getHours())
  const minuto = zeroAEsquerda(data.getMinutes())
  const segundo = zeroAEsquerda(data.getSeconds())

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);
