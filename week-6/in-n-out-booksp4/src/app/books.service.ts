/*
============================================
; Title: book.service.ts
; Author: Professor Krasso
; Date: 30 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 5.3 - Data Tables
;===========================================
*/ 
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      { isbn: '9780060934347', title: 'Don Quixote', description: 'Don Quixote chronicles the adventures of the self-created knight-errant Don Quixote of La Mancha and his faithful squire, Sancho Panza, as they travel through sixteenth-century Spain.', numOfPages: 992, authors: ['Miguel De Cervantes'] },
      { isbn: '9781503219700', title: 'A Tale of Two Cities', description: 'A Tale of Two Cities (1859) is a novel by Charles Dickens, set in London and Paris before and during the French Revolution.', numOfPages: 262, authors: ['Charles Dickens'] },
      { isbn: '9780544003415', title: 'The Lord of the Rings', description: 'The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider', numOfPages: 1178, authors: ['J.R.R. Tolkien'] },
      { isbn: '9780007440849', title: 'The Hobbit', description: 'In this fantasy classic, master storyteller J.R.R. Tolkein creates a bewitching world filled with delightful creatures and thrilling dangers. Narrator Rob Inglis will hold listeners of all ages spellbound with his skillful portrayal of hobbits, dwarves, and enchanted beasts.', numOfPages: 304 , authors: ['J.R.R. Tolkien'] },
      { isbn: '9781551923987', title: 'Harry Potter and the Philosopher\'s Stone', description: 'Harry Potter and the Philosopher\'s Stone is the first novel in the Harry Potter series and features Harry Potter, a young wizard. It describes how Harry discovers he is a wizard, makes close friends and a few enemies at the Hogwarts School of Witchcraft and Wizardry, and with the help of his friends thwarts an attempted comeback by the evil wizard Voldemort, who killed Harry\'s parents and tried to kill Harry when he was one year old.', numOfPages: 223, authors: ['J.K. Rowling'] }
    ];
  }

 //Return all the books.
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  //Return a book details by isbn.
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }

    }
  }

}
