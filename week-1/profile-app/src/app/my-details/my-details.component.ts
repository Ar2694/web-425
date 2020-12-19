/*
============================================
; Title: my-details.component.ts
; Author: Professor Krasso
; Date: 19 December 2020
; Modified By: Arlix Sorto
; Description: Exercise 1.5 – Components
;===========================================
*/ 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
