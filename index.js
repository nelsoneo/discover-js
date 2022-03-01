/* Desafios */

/* Exercicies #3

Crie uma função que receba uma string em celsius ou fahrenheit a faça a transformação de uma unidade
para outra.

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

function changeTemperature(grade) {
  const celciusExist = grade.toLowerCase().includes("c");
  const fahrenheitExist = grade.toLowerCase().includes("f");

  if (!celciusExist && !fahrenheitExist) {
    throw new Error(
      "the letter information not match with celcius or fahrenheit"
    );
  }

  let valor = grade.match(/\d+/g);
  let formula = fahrenheit => (fahrenheit - 32) * 5/9;
  let degreeLetter = "F";

  if (celciusExist) {
    valor = grade.match(/\d+/g);
    formula = celcius => celcius * 9/5 + 32;
    degreeLetter = "C";
  }

  return formula(valor)+ " " + degreeLetter;
}

try {
  console.log(changeTemperature("10C"));
  console.log(changeTemperature("50F"));
} catch (error) {
  console.log(error.message);
}
