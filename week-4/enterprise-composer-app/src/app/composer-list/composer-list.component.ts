/*
============================================
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 24 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';
import {IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//Output the list of composers from the composer service.
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  
  //Tracks the value and the status of the search field.
  txtSearchControl = new FormControl('');


  constructor(private composerService: ComposerService) { 
    this.composers = this.composerService.getComposers();
    
    //Calls the filterComposers function when the value changes and deBounceTime is used to slows down the number of calls.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));

  }

  ngOnInit(): void {
  }

  //Call filterComposer function from the composer service.
  filterComposers(name: string){
    this.composers = this.composerService.filterComposers(name);
  }
}
