/* Desafios */

/* Exercicies #2

Crie um objeto que possuirá 2 propiedades, ambas do tipo array:

* incomes: []
* expenses: [] 

Agora, cire uma função que irá calcular o total de incomes
e de pespesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo,
seguido do valor do saldo.

*/

//variante #1 using reduc()

function calculateBalance(person){
 
    let incomes = person.incomes.reduce((previusValue, currenteValue) => previusValue += currenteValue);
    if( incomes == 0){
        return 'O valor da incomes é 0'
    } else {
        let expenses = person.expenses.reduce((previusValue, currenteValue) => previusValue += currenteValue);
        
        let finalCach = incomes - expenses;
        if (finalCach >= 0){
            return 'Saldo Positivo com valor = '+ finalCach.toFixed(2);
        } else {
            return 'Saldo Negativo com valor = ' + finalCach.toFixed(2);
        }
    }
}

//variante #2 using function auxiliar

function sumTotal(array) {
    let total = 0;

    for (const iterator of array) {
        total += iterator;
    }
    return total;
}

function calculateBanlaces(person){
    const calculateIncomes = sumTotal(person.incomes);
    const calculateExpenses = sumTotal(person.expenses);

    let valorTotal = calculateIncomes - calculateExpenses;
    let balanceText = 'Negativo';

    if(valorTotal >= 0) {
        balanceText = 'Positivo'; 
    }
    return `Seu Saldo é ${balanceText} : R$ ${valorTotal.toFixed(2)}`;
}

//----------------------------------------------------------

let person = {
    incomes: [500.50, 700.55],
    expenses: [100.60, 200.20, 100.14, 100.96, 500.36]
}

// console.log(calculateBalance(person))
console.log(calculateBanlaces(person))
