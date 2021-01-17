/*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 3.4 - Guarding Routes
;===========================================
*/ 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 3.4 - Guarding Routes';
  title: string = "Secure Profile App";

}
