/*
============================================
; Title: main-layout.component.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService ) { }

  ngOnInit(): void {
  }
 logOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/auth/login']);
  }
}
