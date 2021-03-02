/*
============================================
; Title: app-routing.module.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceFormComponent } from './service-form/service-form.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [{path:'', component: ServiceFormComponent}],canActivate: [LoginGuard]}, 
  {path:'auth', component: AuthLayoutComponent, children:[{path: 'not-found', component: NotFoundComponent}, {path: 'login', component: LoginFormComponent}]},
  {path: '**', redirectTo: 'auth/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
