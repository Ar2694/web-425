/*
============================================
; Title: app-routing.module.ts
; Author: Professor Krasso
; Date: 06 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 2.2 – Navigation
;===========================================
*/ 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [	
  { path: '', component: HomeComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
