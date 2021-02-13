/*
============================================
; Title: sign-in.service.ts
; Author: Professor Krasso
; Date: 13 Feburary 2021
; Modified By: Arlix Sorto
; Description: Exercise 7.2 - Reactive Forms
;===========================================
*/ 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  studentIds: Array<number>;


  constructor() { 
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];

  }
//Validate the user student ID.
  validate(studentId: number){

    return this.studentIds.some(id => id === studentId);
  }
}
