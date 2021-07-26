const { partitionBooksByBorrowedStatus } = require("./books")

const getTopFive = (array) => array.length > 5 ? array.slice(0, 5) : array

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const borrowed = partitionBooksByBorrowedStatus(books)[0]
  return borrowed.length
}

// returns [{name, count}]
// returns the top 5, sorted by count in descending order
function getMostCommonGenres(books) {
  const genresObject = books.reduce((genres, book) => {
    genres[book.genre] = genres[book.genre] ? genres[book.genre] += 1 : 1
    return genres
  }, {})
  const genreArray = []
  for (let genre in genresObject) {
    genreArray.push({name: genre, count: genresObject[genre]})
  }
  genreArray.sort((first, second) => second.count - first.count)
  return genreArray.length > 5 ? genreArray.slice(0, 5) : genreArray
}

// returns [{name, count}] of the top five books, based on number of borrows
function getMostPopularBooks(books) {
  const rankedBooks = books.map(book => { 
    return {
    name : book.title, 
    count : book.borrows.length,
    }
  })
  rankedBooks.sort((first, second) => second.count - first.count)
  return getTopFive(rankedBooks)
}

function getMostPopularAuthors(books, authors) {
  const namesWithCounts = authors.map(author => {
    // get the books with the author id
    const booksByAuthor = books.filter(book => book.authorId === author.id)
    // get the number of times those books have been borrowed
    const count = booksByAuthor.reduce((total, book) => total + book.borrows.length, 0)
    return {
      name : `${author.name.first} ${author.name.last}`,
      count : count
    }
  })
  namesWithCounts.sort((first, second) => second.count - first.count)
  return getTopFive(namesWithCounts)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
