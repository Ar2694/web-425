/*
============================================
; Title: login-form.component.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router, private cookieService: CookieService) {

   }

  ngOnInit(): void {

    this.loginForm = this.fb.group({ 
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }


  //onSubmit will validate the user credentials and nagivate user to service form.
  onSubmit(){
    const username =  this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if(this.loginService.validateUser(username, password)){
      this.cookieService.set('session_user', username);
      this.router.navigate(['/']);

    }else{
      this.errorMsg = "* Invalid usermane/password, please try again!";
    }

  }
  //Get login form controls.
  get form() {
    return this.loginForm.controls;
  }
}
