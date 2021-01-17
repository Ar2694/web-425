/*
============================================
; Title: app.routing.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 3.3 - Passing Data to Routes, Part 2
;===========================================
*/ 
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
    { path: '', component: SignInComponent},
    { path: 'home', component: HomeComponent }
  
  ];