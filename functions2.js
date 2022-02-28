//function expression or function anonymous

// const sum = function(num1, num2){ //num1, num2 são parâmetros
//     return num1 + num2;
// }

// sum(2, 3)   //arguments

// console.log(sum(2,3))



//Function hoisting (Evevlar)

// sayMyName();

// function sayMyName(){  //function statment ou declaration
//     console.log('Nelson')
// }

//scoreX:  Quando fazer uma function como uma expresão, ela não sofre hoisting, 
//como é o caso das functions anonimous, arrow.



//Function Arrow

const myName = () => {
    console.log('nelson')
}

myName()


//Function Callback


function sayMyName(name){
    console.log('antes de executar a function callback')
    name()
    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

