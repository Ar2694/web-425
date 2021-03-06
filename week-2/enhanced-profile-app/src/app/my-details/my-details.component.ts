/*
============================================
; Title: my-details.component.ts
; Author: Professor Krasso
; Date: 09 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 2.3 - Data Binding
;===========================================
*/ 
import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() { 
    this.myProfile = new Person("Arlix Sorto", "Steak", "Blue");
  }

  ngOnInit(): void {
  }

}
