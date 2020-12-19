/*
============================================
; Title: my-image.component.ts
; Author: Professor Krasso
; Date: 19 December 2020
; Modified By: Arlix Sorto
; Description: Exercise 1.5 – Components
;===========================================
*/ 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
