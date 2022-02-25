
function sayYourName(name){
    
    if(name == ''){
        throw erroName = new String('Nome invalido ou vaziu');
    }

    console.log('Seu nome é : ', name);
}

try {
    sayYourName('')
} catch (error) {
    console.log(error)
}