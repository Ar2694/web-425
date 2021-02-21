/*
============================================
; Title: grade-summary.component.ts
; Author: Professor Krasso
; Date: 06 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 6.4 - Input Properties
;===========================================
*/ 
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent implements OnInit {
  
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
