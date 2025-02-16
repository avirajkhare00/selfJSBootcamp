import { Book } from './lms';
import { Member } from './lms';

test('it creates a book object', () => {
  let book1 = new Book('Rayamana', 'Valmiki', 0);
  expect(book1.name).toBe('Rayamana');
  expect(book1.author).toBe('Valmiki');
  expect(book1.onRent).toBe(false);
})

test('it creates a new member object', () => {
  let member1 = new Member('Aviraj', 0);
  expect(member1.name).toBe('Aviraj');
  expect(member1.memberId).toBe(0);
  expect(member1.borrowedBooks).toStrictEqual([]);
})

test('member rents a new book', () => {
  let book1 = new Book('Rayamana', 'Valmiki', 0);
  let member1 = new Member('Aviraj', 0);
  member1.borrowBook(book1);
  expect(book1.onRent).toBe(true);
  expect(member1.borrowedBooks.length).toBe(1);
})

test('2 members cannot rent a same book', () => {
  let book1 = new Book('Rayamana', 'Valmiki', 0);
  let member1 = new Member('Aviraj', 0);
  let member2 = new Member('Bob', 1);
  member1.borrowBook(book1);
  expect(book1.onRent).toBe(true);
  expect(member1.borrowedBooks.length).toBe(1);
  expect(() => member2.borrowBook(book1)).toThrowError("Book already on rent");
})
