/*
============================================
; Title: invoice-summary-dialog.component.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { BobsService } from '../service.interface';

@Component({
  selector: 'app-invoice-summary-dialog',
  templateUrl: './invoice-summary-dialog.component.html',
  styleUrls: ['./invoice-summary-dialog.component.scss']
})
export class InvoiceSummaryDialogComponent implements OnInit {

  invoiceSummary: BobsService;

  constructor(private dialogRef: MatDialogRef<InvoiceSummaryDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.invoiceSummary = data.invoiceSummary;

  }
  ngOnInit(): void {

  }

}
