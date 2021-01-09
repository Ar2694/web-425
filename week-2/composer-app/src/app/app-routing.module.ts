/*
============================================
; Title: app-routing.module.ts
; Author: Professor Krasso
; Date: 09 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 2.4 - Routing in Action
;===========================================
*/ 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ComposerListComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
