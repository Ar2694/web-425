/*
============================================
; Title: app-routing.module.ts
; Author: Professor Krasso
; Date: 24 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// Routes configurations
const routes: Routes = [
  { path: '', redirectTo: '/composer-list', pathMatch: 'full'},
  { path: "composer-list", component: ComposerListComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
