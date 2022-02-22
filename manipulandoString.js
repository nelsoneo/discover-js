/*

Manipulando String and Number

    * Transformar String of Number and Number of String

*/

// let cadenaStr = "123";
// console.log(Number(cadenaStr));

// let numero = 456;
// console.log(String(numero));

/*

    * Count how many caracter have a String and how digit have a Number

*/

// let cadenaLenght = "Monopolio";
// console.log(cadenaLenght.length);

// let numeroLength = 13245656532;
// console.log(String(numeroLength).length);


/*

    * Tranform a number float with two decimal places and change the dot by a comma

*/

// let numberFloat = 2343.23425;
// console.log(Number(numberFloat).toFixed(2).replace('.', ',')); //return a value string


/*

    * Tranform a letter uppercase by to lowercase. In reverse

*/

// let word = 'Todos vamos a programar';
// console.log(word.toUpperCase().toLowerCase())

/*

    * Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do arra.
      Depois disso, transforme o array em um texto e onde eram espaços, coloque _

*/

// let phrase = 'Eu quero vivir o amor';
// let myArray = phrase.split(' '); //sepra a string pelos espaços
// let phraseNew = myArray.join('_'); //transforma cada posição do array em uma string separada por um _ 
// console.log(phraseNew)


/*

    * Verify if a string have a word 'Amor'

*/

// let phrase = 'Eu quero vivir o Amor';
// console.log(phrase.includes('Amor'))  //includes diferencia entre minisculas y maiusculas

