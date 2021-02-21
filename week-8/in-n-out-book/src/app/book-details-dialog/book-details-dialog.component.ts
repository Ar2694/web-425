/*
============================================
; Title: book-details-dialog.component.ts
; Author: Professor Krasso
; Date: 30 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 5.4 - Dialogs
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject }from '@angular/core';
import { IBook } from '../book.interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  //Injects the MatDialogRef<BookDetailsDialogComponent> as a dislogRef and  pass book data to the dialog.
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
   }

  ngOnInit(): void {
  }

}
