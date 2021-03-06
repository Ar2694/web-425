/*
============================================
; Title: sign-in.guard.ts
; Author: Professor Krasso
; Date: 13 Feburary 2021
; Modified By: Arlix Sorto
; Description: Exercise 7.2 - Reactive Forms
;===========================================
*/ 

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService){

  }

 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    const sessionUser = this.cookieService.get('session_user');
    
    if(sessionUser){
      return true;
    }else{
      this.router.navigate(['/session/sign-in']);
      return false;
      
    }
  }
  
}
