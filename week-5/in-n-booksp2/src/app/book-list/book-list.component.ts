/*
============================================
; Title: book-list.component.ts
; Author: Professor Krasso
; Date: 29 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 5.2 - Navigation and Layout
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService) {
  this.books = booksService.getBooks();
   }

  ngOnInit(): void {
  }
showBookDetails(Isbn: string){
 this.book =  this.booksService.getBook(Isbn);
 console.log(this.book);
}

}
