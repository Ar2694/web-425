/*
============================================
; Title: person.class.ts
; Author: Professor Krasso
; Date: 19 December 2020
; Modified By: Arlix Sorto
; Description: Assignment 1.4 - TypeScript
;===========================================
*/ 
import { IPerson } from "./person.interface"

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Arlix", "Sorto");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);