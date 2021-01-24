/*
============================================
; Title: composer.service.ts
; Author: Professor Krasso
; Date: 24 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/ 


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
 


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

//Return a list of composers
  getComposers(): Observable<IComposer[]> {
      return of(this.composers);
  }

//Returns a composer detail by Id
  getComposer(composerId: number) {
      for (let composer of this.composers) {
          if (composer.composerId === composerId) {
              return composer;
          }
      }
  }

  //Returns a new Observable array of composers object containing only their fullName.
 filterComposers(name: string): Observable<IComposer[]>{
        return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)));
    }
}
