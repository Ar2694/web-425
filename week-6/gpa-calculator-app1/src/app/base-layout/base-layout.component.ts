/*
============================================
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 06 Feburary 2021
; Modified By: Arlix Sorto
; Description: Exercise 6.3 - Layouts
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;
  constructor() { 
    this.assignment = "Exercise 6.3 - Layouts";
  }

  ngOnInit(): void {
  }

}
