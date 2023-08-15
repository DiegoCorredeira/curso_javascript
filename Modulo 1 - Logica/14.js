// For clássico -> Geralemnte com iteráveis (array ou strings)
// For in -> Retorna o indice ou chave (string, array ou objetos)
// For of -> Retorna o valor em si (iteráveis, arrays ou strings)
const nomes = ['Rebeca', 'Julia', 'Ana', 'Maria']

for (let nome of nomes) {
    console.log(nome)
}

console.log('-------------------');

nomes.forEach(function(valor, indice) {
    console.log(valor, indice)
})

console.log('-------------------');

const pessoa = {
    nome: 'Julia',
    sobrenome: 'Silva',
    idade: 29
}

