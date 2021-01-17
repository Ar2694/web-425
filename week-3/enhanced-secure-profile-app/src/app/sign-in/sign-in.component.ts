/*
============================================
; Title: sign-in.component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 3.4 - Guarding Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

//Log user in and passing data to a component using parameters
  signIn() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], { queryParams: { isLoggedIn: this.isLoggedIn }, skipLocationChange: true });


  }

}
