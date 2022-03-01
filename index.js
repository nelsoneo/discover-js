/* Desafios */

/* Exercicies #3

Crie uma função que receba uma string em celsius ou fahrenheit a faça a transformação de uma unidade
para outra.

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

function changeTemperature(grade) {
  const celcius = !grade.toLowerCase().includes("f");
  const fahrenheit = !grade.toLowerCase().includes("c");
  const valor = grade.slice(0, grade.length - 1);

  if (celcius && fahrenheit) {
    throw new Error("the letter information not match with celcius or fahrenheit");
  } else {
      if (celcius){
          
          return 'valor em celcius é : ' + valor * 9/5 + 32;
      }
      return 'valor em fahrenheit é : ' + (valor - 32) + 5/9;
  }
}

try {
    changeTemperature("300a")
} catch (error) {
    console.log(error.message)
}


