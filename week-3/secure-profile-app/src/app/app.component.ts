/*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 3.3 - Passing Data to Routes, Part 2
;===========================================
*/ 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.3 - Passing Data to Routes - Part 2';
  title: string = "Secure Profile App";

}
