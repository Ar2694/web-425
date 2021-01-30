/*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 29 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 5.2 - Navigation and Layout
;===========================================
*/ 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in-n-booksp1';
  assignment: string;

  constructor(){
    this.assignment = "Exercise 5.2 - Navigation and Layout";
  }
}
