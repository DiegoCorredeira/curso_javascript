/*
Operadores de comparação

> maior que 
< menor que 
>= maior ou igual a
<= menor ou igual a
== igualdade (valor) *****
=== igualdade estrita (valor e tipo)
!= diferente (valor) *****
!== diferente estrito (valor e tipo)
*/

const comp = 10 > 5;
console.log(comp); // true

const comp2 = 10 < 5;
console.log(comp2); // false

const comp3 = 10 >= 5;
console.log(comp3); // true

const comp4 = 10 <= 5;
console.log(comp4); // false

const comp5 = 10 == 5;
console.log(comp5); // false

const comp6 = 10 == 10;
console.log(comp6); // true

const comp7 = 10 === 10;
console.log(comp7); // true

const comp8 = 10 === '10';
console.log(comp8); // false

const comp9 = 10 != 5;
console.log(comp9); // true

const comp10 = 10!= 10;
console.log(comp10); // false

const comp11 = 10!== 10;
console.log(comp11); // false