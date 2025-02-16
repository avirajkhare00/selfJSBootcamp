// Library Management System

export class Book {
  constructor(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.onRent = false;
  }
}

export class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }
  borrowBook(book) {
    if (book.onRent) {
      console.log("Book already on Rent!");
      throw new Error('Book already on rent');
    }
    else {
      this.borrowedBooks.push(book);
      book.onRent = true;
      console.log('Book borrowed: ', book.name);
    }
  }
  returnBook(book) {
    if (this.borrowedBooks.length) {
      const bookIndex = this.borrowedBooks.indexOf(book);
      this.borrowedBooks.splice(bookIndex, 1);
      book.onRent = false;
      console.log('Book returned successfully', book.name);
    }
    else {
      console.log('No books borrewed!');
    }
  }
}
