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
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = booksService.getBooks();
  }

  ngOnInit(): void {}

  //Displays a book detail on a dialog box.
  showBookDetails(Isbn: string) {
    this.book = this.booksService.getBook(Isbn);

    //Display a dislog box .
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px',
    });
    console.log(this.book);

    //Close dialog box;
    dialogRef.afterClosed().subscribe((result => {
      if (result === 'confirm') {
        this.book = null;
      }
    }));
  }
}
