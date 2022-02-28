

function isBalancedBrackets(cadena) {

    if(cadena !== null){
        return "NO"
    } {
        let bracket = [];

        for (let index = 0; index < cadena.length; index++) {
          let caracter = cadena[index];
      
          if (caracter == "(" || caracter == "[" || caracter == "{") {
            bracket.push(caracter);
            continue;
          }
      
          if (bracket.length == 0) {
            return "NO";
          }
      
          let check;
          switch (caracter) {
            case ")":
              check = bracket.pop();
              if (check == "[" || check == "{") {
                return "NO";
              }
              break;
            case "]":
              check = bracket.pop();
              if (check == "(" || check == "{") {
                return "NO";
              }
              break;
      
            case "}":
              check = bracket.pop();
              if (check == "[" || check == "(") {
                return "NO";
              }
              break;
          }
        }
    }
  return "YES";
}

if (isBalancedBrackets("")){
    document.write("balance")

}else {
    document.write("no balance")
}

console.log('' == 3)