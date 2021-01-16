/*
============================================
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';
import {IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//Output the list of composers from the composer class.
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() { 
    this.composers = new Composer().getComposers();

  }

  ngOnInit(): void {
  }

}
