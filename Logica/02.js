/*
Operadores Lógicos

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Pelo menos uma expressão precisa ser verdadeira para retornar true
! -> NOT -> NÃO -> Nega uma expressão. Se verdadeira, retorna false. Se falsa, retorna true
*/

dinheiro = false
sol = true
roupa = true

// AND
const sair = dinheiro && sol && roupa
console.log(`Posso sair? ${sair}`)

// OR
const sair2 = dinheiro || sol || roupa
console.log(`Posso sair? ${sair2}`)

// NOT
const sair3 = !dinheiro
console.log(`Posso sair? ${sair3}`)