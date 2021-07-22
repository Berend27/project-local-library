const { findAccountById } = require("./accounts")

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = []
  const booksOut = []
  books.forEach(book => {
    if (book.borrows.every(borrow => borrow.returned == true)) returnedBooks.push(book)
    else booksOut.push(book)
  })
  return [booksOut, returnedBooks]
}

const theBook = {
  id: "5f44713265e5d8d17789beb0",
  title: "tempor occaecat fugiat",
  genre: "Travel",
  authorId: 16,
  borrows: [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
    }
  ]
}

const accounts = [
  {
    id: "5f446f2ecfaf0310387c9603",
    picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
    age: 25,
    name: {
      first: "Esther",
      last: "Tucker",
    },
    company: "ZILLACON",
    email: "esther.tucker@zillacon.me",
    registered: "Thursday, May 28, 2015 2:51 PM",
  },
  {
    id: "5f446f2ed46724f41c9fc431",
    picture: "https://api.adorable.io/avatars/75/ferrell.morris@ecolight.com",
    age: 35,
    name: {
      first: "Ferrell",
      last: "Morris",
    },
    company: "ECOLIGHT",
    email: "ferrell.morris@ecolight.com",
    registered: "Thursday, February 8, 2018 1:16 PM",
  }
]

// returns the borrows array of a book plus
// the properties of the corresponding account have been added
function getBorrowersForBook(book, accounts) {
 /*
  things to do
  1. get the borrows array for a book
  2. for each borrow object, take the key-value pairs from an account object 
     and add them to the borrow object, possibly a new object with object shorthand 
     or use a for in loop
  3. return the array
 */
  const { borrows } = book
  
}

// getBorrowersForBook(theBook, accounts)

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
