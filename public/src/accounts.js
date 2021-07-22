function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((first, second) => {
    return first.name.last.toUpperCase() > second.name.last.toUpperCase() ? 1 : -1
  })
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

function getTotalNumberOfBorrows(account, books) {
  // get the id from the account
  // reduce the books array to a sum of times the account id appears
  const id = account.id
  return books.reduce((count, book) => {
    return count + (book.borrows.some(borrow => borrow.id === id) ? 1 : 0)
  }, 0)
}

const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      }
    ]
  }
]

const authors = [
  {
    id: 8,
    name: {
      first: "Susanne",
      last: "Lawson",
    },
  }
]

// helper function
function addAuthorProperty(books, authors) {
  // use map to add the property
  // use find to get the author using the authorId of the book
  // use .author = the author object to add the property
  return books.map(book => {
    book.author = authors.find(author => author.id === book.authorId)
    return book
  })
}

function getBooksPossessedByAccount(account, books, authors) {
  // add an author property to each book
  const booksWithAuthors = addAuthorProperty(books, authors)
  // go through the book array, and filter for items where the borrows array 
  // includes an object with returned set to false, and the id matches the account id
  const accountId = account.id
  return theBooks =  books.filter(book => {
    return book.borrows.some(borrow => (borrow.id === accountId && borrow.returned === false))
  })
}

let testAccount = {
  id: "5f446f2e2cfa3e1d234679b9",
  picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  age: 25,
  name: {
    first: "Esther",
    last: "Tucker",
  },
  company: "ZILLACON",
  email: "esther.tucker@zillacon.me",
  registered: "Thursday, May 28, 2015 2:51 PM",
}
getBooksPossessedByAccount(testAccount, books, authors)


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
