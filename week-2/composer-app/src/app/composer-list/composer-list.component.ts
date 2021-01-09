import { Component, OnInit } from '@angular/core';


/*
============================================
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 09 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 2.4 - Routing in Action
;===========================================
*/ 
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
   
  }
}
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() { 
    this.composers = [
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Giuseppe Verdi", "Classical"),
      new Composer("Pyotr Ilyich Tchaikovsky", "Classical"),
    ]
  }

  ngOnInit(): void {
  }

}
