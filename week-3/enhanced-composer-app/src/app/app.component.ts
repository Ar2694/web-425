/*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
;===========================================
*/  
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'composer-app';
  assignment: String = "Exercise 3.2 - Passing Data to Routes, Part 1";
}
