/*
============================================
; Title: app.routing.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 3.4 - Guarding Routes
;===========================================
*/ 
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';


export const AppRoutes: Routes = [
    { path: '', component: SignInComponent},
    { path: 'home', component: HomeComponent, canActivate: [SignInGuard] }
  
  ];