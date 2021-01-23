/*
============================================
; Title: composer.service.ts
; Author: Professor Krasso
; Date: 23 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 4.2 - Inversion of Control and Dependency Injection
;===========================================
*/ 


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
      this.composers = [
          { composerId: 100, fullName: "Wolfgang Amadeus Mozart", genre: "Classical" },
          { composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical" },
          { composerId: 102, fullName: "Ludwig van Beethoven", genre: "Classical" },
          { composerId: 103, fullName: "Giuseppe Verdi", genre: "Classical" },
          { composerId: 104, fullName: "Pyotr Ilyich Tchaikovsky", genre: "Classical" }
      ]

  }
//Get list of composers
  getComposers() {
      return this.composers;
  }

//Get composer detail by Id
  getComposer(composerId: number) {
      for (let composer of this.composers) {
          if (composer.composerId === composerId) {
              return composer;
          }
      }
  }
}
