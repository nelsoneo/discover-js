/* Calculdora simple */

function calculadoraNumerica(numero1, operador, numero2) {
    let result = 0;
  
    switch (operador) {
      case "+":
        result = numero1 + numero2;
        break;
  
      case "-":
        result = numero1 - numero2;
        break;
  
      case "*":
        result = numero1 * numero2;
        break;
  
      case "/":
        result = numero1 / numero2;
        break;
  
      case "%":
        result = numero1 % numero2;
        break;
  
      default:
        break;
    }
  
    return result;
  }
  
  console.log(calculadoraNumerica(80, "/", 2));