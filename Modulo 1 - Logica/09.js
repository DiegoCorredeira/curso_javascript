/**
 *
 * Diferenças entre var, let e const
 *
 */

/**
 * 
 * 
    var e let são duas palavras-chave usadas para declarar variáveis em JavaScript. Embora ambas sejam usadas para criar variáveis, elas têm diferenças importantes em termos de escopo e comportamento. Aqui estão as principais diferenças entre var e let:

    Escopo de Bloco:

    var: Variáveis declaradas com var têm escopo de função ou global. Isso significa que a variável é visível em todo o escopo da função em que foi declarada ou, se for declarada fora de uma função, é uma variável global e é acessível em todo o código.
    let: Variáveis declaradas com let têm escopo de bloco. Isso significa que a variável é visível apenas dentro do bloco (entre {}) em que foi declarada, seja dentro de uma função, loop ou qualquer outro bloco.
    Hoisting:

    var: Variáveis declaradas com var são elevadas (hoisted) para o topo do escopo em que foram declaradas. Isso significa que a variável pode ser usada antes de ser declarada, mas seu valor será undefined.
    let: Variáveis declaradas com let também são hoisted, mas ao contrário das variáveis var, elas não são inicializadas com undefined. Isso é conhecido como "temporal dead zone" (zona de morte temporal), o que significa que tentar usar a variável antes de sua declaração resultará em um erro.
    Re-declaração:

    var: É possível re-declarar uma variável usando var no mesmo escopo, sem causar erro.
    let: Tentar re-declarar uma variável usando let no mesmo escopo resultará em um erro.
    Escopo de Loop (Loop Scoping):

    var: Variáveis declaradas com var em loops (como for) têm escopo de função ou global, o que pode levar a comportamentos inesperados quando se trabalha com loops.
    let: Variáveis declaradas com let em loops têm escopo de bloco, o que evita muitos problemas associados ao escopo de loop do var.
    Compatibilidade com Versões Anteriores:

    var: Existe há muito tempo no JavaScript, sendo suportado em todas as versões do ECMAScript.
    let: É uma adição mais recente ao JavaScript e é introduzido no ECMAScript 6 (ES6).
 * 
 */
