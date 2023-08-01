/**
 * Operadores Ternários
 *
 * ? :
 */

const pontuacaoUser = 1000;
nivelUsuer = pontuacaoUser >= 1000 ? "Usuário VIP" : "Usuário comum";
//
const corUsuario = null; // fallback
const corPadrao = corUsuario || "Preta";
console.log(nivelUsuer, corPadrao);
