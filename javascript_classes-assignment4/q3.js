'use strict';
class Book {
  constructor(title, author, isbn, isIssued = false) { Object.assign(this, { title, author, isbn, isIssued }); }
  issueBook() { if (this.isIssued) return false; this.isIssued = true; return true; }
  returnBook() { this.isIssued = false; }
}
const books = [
  new Book('The Alchemist', 'Paulo Coelho', 'ISBN101'),
  new Book('Wings of Fire', 'A. P. J. Abdul Kalam', 'ISBN102'),
  new Book('Atomic Habits', 'James Clear', 'ISBN103', true)
];
function displayAvailableBooks() {
  const list = document.getElementById('availableBooks'); list.innerHTML = '';
  books.filter(book => !book.isIssued).forEach(book => {
    const item = document.createElement('li'); item.textContent = `${book.title} — ${book.author} (ISBN: ${book.isbn})`; list.appendChild(item);
  });
}
document.getElementById('issueButton').addEventListener('click', () => {
  const isbn = document.getElementById('isbn').value.trim();
  const book = books.find(item => item.isbn.toLowerCase() === isbn.toLowerCase());
  document.getElementById('message').textContent = !book ? 'No book found with that ISBN.' : book.issueBook() ? `Issued: ${book.title}` : 'This book is already issued.';
  displayAvailableBooks();
});
displayAvailableBooks();
