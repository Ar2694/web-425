/*
============================================
; Title: sign-in.guard.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 3.4 - Guarding Routes
;===========================================
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //Checks if the user is logged in and if not the user will be redirected to login page.
      let isLoggedIn = route.queryParams.isLoggedIn;
    if (isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }

  }

}
