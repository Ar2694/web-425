/*
============================================
; Title: app.module.ts
; Author: Professor Krasso
; Date: 09 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 2.3 - Data Binding
;===========================================
*/ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
