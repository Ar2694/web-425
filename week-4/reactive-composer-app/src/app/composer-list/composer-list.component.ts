/*
============================================
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 23 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 4.3 – Handling Form Events with Observables
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';
import {IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//Output the list of composers from the composer service.
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  
  //Tracks the value and the status of the search field.
  txtSearchControl = new FormControl('');


  constructor(private compserService: ComposerService) { 
    this.composers = this.compserService.getComposers();
    
    //Calls the filterComposers function when the value changes and deBounceTime is used to slows down the number of calls.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val =>this.filterComposers(val));

  }

  ngOnInit(): void {
  }

  filterComposers(name: string){
    alert(name);
  }
}
