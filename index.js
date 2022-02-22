/*

    * Create a construction Array

*/

// let myArray = new Array('a', 'b', 'c');  //new array with parametres

// let myArray = new Array(10);  //new array with length
// console.log(myArray)

/*

    * Count elements an Array

*/

// console.log(['a','b', 'c', 'd'].length)

// console.log(['a','b', {type: "array"}, function(){return 'ola array'}][3]())

/*

    * Tranform a string letter in elements an array

*/

// let phrase = 'Manipulations'
// let myArray = String(phrase).split('')
// console.log(myArray)   // Or
// console.log(Array.from(phrase))

/*

    * Manipulando Array

*/

let myArray = ["banana", "maça", "melon"];

/* adicionar um item no fim */

// myArray.push("abacaxi");

/* adicionar um item no inicio */

// myArray.unshift("pera");

/* remover do fim */

// myArray.pop();

/* remover do inicio */

// myArray.shift();

/* pegar somente alguns elementos do array */

// console.log(myArray.slice(0, 2));

/* remover 1 ou mais items em qualquer posição do array */

// console.log(myArray.splice(0, 1));

/* encontrar a posição de un elemento no array */

let indexArray = myArray.indexOf('melon')
console.log(myArray.splice(indexArray, 1));
// console.log(myArray.findIndex(item => item.search('maça')));

console.log(indexArray, myArray);
