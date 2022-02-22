/*
Function() constructor

    * Expresão new
    * Cria um novo objeto
    * this keyword

*/


function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + ' está andando'
    }
}

const nelson = new Person('Nelson')

console.log(nelson.walk())


//Outros exemplos de functions constructor do JavaScript

let name = new String('nelson')
console.log(name)

let date = new Date('2022-02-20')
console.log(date)