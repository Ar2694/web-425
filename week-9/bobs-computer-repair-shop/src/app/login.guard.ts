/*
============================================
; Title: login.guard.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
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
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const sessionUser = this.cookieService.get('session_user');
    
    //Check user session and returns a boolean.
    if(sessionUser){
      return true;
    }else{
      this.router.navigate(['/auth/login']);
      return false;
      
    }
  }
  
}
