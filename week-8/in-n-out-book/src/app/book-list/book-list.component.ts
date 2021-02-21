/*
============================================
; Title: book-list.component.ts
; Author: Professor Krasso
; Date: 18 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 8.2 - Server-side Communications
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
  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {

      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
console.log(res[key].details);
         //Populate author names in the array
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }
          //Store books in the array.
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  //Displays a book detail on a dialog box.
  showBookDetails(Isbn: string) {
    this.book = this.books.find(book => book.isbn === Isbn);
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
