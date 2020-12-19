/*
============================================
; Title: app.module.ts
; Author: Professor Krasso
; Date: 19 December 2020
; Modified By: Arlix Sorto
; Description: Exercise 1.3 - Angular CLI
;===========================================
*/ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
