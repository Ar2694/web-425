/*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 09 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 2.3 - Data Binding
;===========================================
*/ 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
assignment: string = 'Exercise 2.3 - Data Binding';
isLoggedIn: boolean = true;
}
