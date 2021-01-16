/*
============================================
; Title: composer.class.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
;===========================================
*/ 

import { IComposer } from './composer.interface';
export  class Composer {
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