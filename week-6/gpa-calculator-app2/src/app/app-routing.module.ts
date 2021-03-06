/*
============================================
; Title: app-routing.module.ts
; Author: Professor Krasso
; Date: 06 Feburary 2021
; Modified By: Arlix Sorto
; Description: Exercise 6.3 - Layouts
;===========================================
*/ 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: BaseLayoutComponent , children:[{path: '', component: HomeComponent}]},
  {path:'session', component: AuthLayoutComponent, children:[{path: 'not-found', component: NotFoundComponent}]},
  {path: '**', redirectTo: 'session/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
