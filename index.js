/*

Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o numero de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os campos
      livros desse autor.

*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        tile: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubtituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

//*
// const totalCategory = booksByCategory.length;

//*
// const totalBooks = booksByCategory.reduce(
//   (previusValue, currentValue) => previusValue + currentValue.books.length,
//   0
// );

// for (const iterator of booksByCategory) {
//     console.log("Total de livros da categoria : "+ iterator.category)
//     console.log(iterator.books.length)
// }

//*
// function countAutors(books) {
//   let author = [];

//   for (let category of books) {
//     for (let book of category.books) {
     
//         author.push(book.author);
    
//     }
//   }
//   return "Total de authores é: "+ author.length;
// }

// console.log(countAutors(booksByCategory));

//*

function showAutorAugusto(books, author) {
    let authorBook = [];
  
    for (let category of books) {
      for (let book of category.books) {
        if(book.author == author) {
            authorBook.push(book.title);
       }
      }
    }
    return `Livros do ${author} : ${authorBook.join(", ")}`
  }

console.log(showAutorAugusto(booksByCategory, "T. Harv Eker"));
