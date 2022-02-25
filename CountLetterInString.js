let cadenaStr = 'aaaabbcccd';

function searchCountLetterString(cadenaInput) {
    
    if(cadenaInput === '' || cadenaInput === undefined) {
        return 'Cadena Vazia';
    }else {
   
        let previewLetter = cadenaInput[0];
        let counter = 0;

        let newCadenaObj = new String();  //novo constructor tipo string

        for (const iterator of cadenaStr) {  //iterando uma string 
  
            if(iterator === previewLetter) {
                
                counter++;

            } else if (previewLetter !== 0) {

                newCadenaObj += counter + previewLetter + '_';
                previewLetter = iterator;
                counter = 1;
            }   
        }

        newCadenaObj += counter + previewLetter
        
        return newCadenaObj;
    }
}

console.log(searchCountLetterString(cadenaStr));