/**
 * Objeto Date
 * 
 */

// const data = new Date(2023, 7, 1); // a, m, d , h, M, s , ms
// console.log(data.toString());


const data = new Date() // formato mais utilizado
const dia = data.getDate(); 
const mes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes()
const segundos = data.getSeconds()
const milis = data.getMilliseconds()
const diaSemana = data.getDay()

console.log(dia, mes, ano, hora, minutos, segundos, milis, diaSemana);