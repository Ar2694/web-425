/*
============================================
; Title: contact.component.ts
; Author: Professor Krasso
; Date: 23 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 4.2 - Inversion of Control and Dependency Injection
;===========================================
*/ 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
