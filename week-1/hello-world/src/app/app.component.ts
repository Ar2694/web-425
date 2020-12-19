/*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 19 December 2020
; Modified By: Arlix Sorto
; Description: Exercise 1.3 - Angular CLI
;===========================================
*/ 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = 'You are now in Arlix world!!!';
}
