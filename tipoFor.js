// for ... of
// normalmento utiizado para string e array

// let name = 'nelson';
// let names = ['daniel', 'amanda', 'nelson'];

// for(let char of names){
//     console.log(char);
// }

/*

for ... in
//normalmente para uso de objetos leer suas propiedades
*/

let person = {
    name: 'nelson',
    age: 35,
    sexo: 'Masculino'
}

for(let property in person){
    // console.log(property)
    console.log(person[property])
}