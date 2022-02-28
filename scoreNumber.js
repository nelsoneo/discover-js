/* Desafios */

/* Exercicies #1

Crie um algoritmo que transforme as scoreXs do sistema numérico para sistema de scoreXs em caracteres tipo
A B C


* de 90 para cima    - A
* entre 80 - 89      - B
* entre 70 - 79      - C
* entre 60 - 69      - D
* menor que 60       - F

*/

function scoreXsNumericaForCharacter(scoreX) {
  let score = " ";

  if (scoreX < 0) {
    return (score = "Score negative not allow");
  } else {
    switch (scoreX >=0) {
      case scoreX >= 90 && scoreX <= 100:
        return (score = "A");
        break;
      case scoreX >= 80 && scoreX <= 89:
        return (score = "B");
        break;
      case scoreX >= 70 && scoreX <= 79:
        return (score = "C");
        break;
      case scoreX >= 60 && scoreX <= 69:
        return (score = "D");
        break;
      case scoreX < 60:
        return (score = "F");
        break;
      default:
        return (score = "Score leave of parametres");
        break;
    }
  }
  return score;
}

console.log(scoreXsNumericaForCharacter(-1));
console.log(scoreXsNumericaForCharacter(0));
console.log(scoreXsNumericaForCharacter(50));
console.log(scoreXsNumericaForCharacter(60));
console.log(scoreXsNumericaForCharacter(70));
console.log(scoreXsNumericaForCharacter(80));
console.log(scoreXsNumericaForCharacter(90));
console.log(scoreXsNumericaForCharacter(101));
