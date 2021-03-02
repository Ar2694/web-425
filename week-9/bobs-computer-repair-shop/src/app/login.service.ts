/*
============================================
; Title: login.service.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { Injectable } from '@angular/core';
import { User } from './user.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor() {
    this.user = {
      username: 'admin',
      password: 'admin'
    }
  }

  //Validate the user credentials and returns a boolean.
  validateUser(username: String, password: String) {
    if (username === this.user.username && password === this.user.password) {
      return true;
    } else {
      return false;
    }
  }
}
