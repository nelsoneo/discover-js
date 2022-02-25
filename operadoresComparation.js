/*

    * Operadores de comparação

*/

let one = 1
let two = 2

// == operador de igualda true / false

// console.log(one == 1)

// != operador de desilgualda true / false

// console.log(one != 2)

// === estrictamente igual

// console.log(one === '1')
// console.log(one === 1)


// !== estrictamente diferente de

// console.log(two !== '2')
// console.log(two !== 2)


/*

    * Operadores Logic

*/

// let pao = false
// let queijo = false

// And &&

// console.log(pao && queijo)

// Or ||

// console.log(pao || queijo)

// Not !

// console.log(!queijo)

/*

    * Operadores Condicional ou Ternario

    condition  ? sim : não
*/

// let pao = true
// let queijo = false

// const cafeManha = pao || queijo ? 'Cafe bom' : 'Cafe Ruim'

// console.log(cafeManha)


/*

    * Operadores Falsy ou Truthy

    
*/


/* Falsy                                Trusthy

false                                   true
0                                       {}
-0                                      []
""                                      3.23
nul                                     "0"
undefined                               "false"
Nan                                     Infinity
                                         -Infinity   
*/                                          

// console.log(Infinity ? 'verdadero' : 'falso')



/*

    * Operadores precedence

    
* gruoping                  ()
* negação e incremento      ! ++ --
* multiplicação e divisão   * /
* adição e subtração        + - 
* relacional                < <=  > >=
* igualdade                 == != === !==
* AND                       &&
* Or                        ||
* Not                       !
* condicional               ?:
assignment                  = += -+ *+ /+  




*/