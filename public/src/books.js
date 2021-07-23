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

// returns the borrows array of a book plus
// the properties of the corresponding account have been added
function getBorrowersForBook(book, accounts) {
  const { borrows } = book 
  while (borrows.length > 10) borrows.pop()
  return borrows.map(borrow => {
    const id = borrow.id
    const account = findAccountById(accounts, id)
    for (let key in account) {
      borrow[key] = account[key]
    }
    return borrow
  })
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
