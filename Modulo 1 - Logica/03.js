/**
 * "Eu não preciso checar mais nada se eu encontrar um valor(true ou false)"
 *
 *  && -> false && true -> false "O valor mesmo"
 *  || -> true && false -> vai retornar "O valor verdadeiro"
 *
 *
 *
 *
 */

/**
 * Valores falsy
 * false (literal)
 * 0
 * "", '', ``
 * null / undefined
 * NaN
 *
 */

// AND

console.log("Batman" && "Robin"); // Como não tem mais nada para checar, retorna o último valor
console.log("Batman" && "" && "Robin"); // Como encontrou um valor falsy, retorna o valor falsy

function falaOi() {
  return "Oi";
}
let executar;

console.log(executar && falaOi()); // Como executar é false, não executa a função e retorna false

// OR

console.log(0 || false || null || "Batman"); // Retorna o primeiro valor truthy

const corUsuario = null;
const corPadrao = corUsuario || "preto"; // Se corUsuario for falsy, retorna o primeiro valor truthy
console.log(corPadrao);
