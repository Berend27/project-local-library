const { partitionBooksByBorrowedStatus } = require("./books")

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

const theBooks = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      }
    ],
  },
  {
    id: "5f4471329627160be1e8ce92",
    title: "esse ea veniam non occaecat",
    genre: "Classics",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ed3609b719568a415",
        returned: false,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      }
    ],
  },
  {
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
]

function getBooksBorrowedCount(books) {
  const borrowed = partitionBooksByBorrowedStatus(books)[0]
  return borrowed.length
}

function getMostCommonGenres(books) {
  /*
  use reduce to form an object that has a key for 
  each genre that is come across and a corresponding
  value for the number of times it appears.
  if the value is already trusy, increment it
  */
 
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
