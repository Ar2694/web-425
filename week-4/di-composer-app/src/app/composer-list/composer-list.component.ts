/*
============================================
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 23 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 4.2 - Inversion of Control and Dependency Injection
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';
import {IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//Output the list of composers from the composer class.
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private compserService: ComposerService) { 
    this.composers = this.compserService.getComposers();

  }

  ngOnInit(): void {
  }

}
