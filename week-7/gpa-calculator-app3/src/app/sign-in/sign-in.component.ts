/*
============================================
; Title: sign-in.component.ts
; Author: Professor Krasso
; Date: 13 Feburary 2021
; Modified By: Arlix Sorto
; Description: Exercise 7.2 - Reactive Forms
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

  }

  //Initalize a form control value
  ngOnInit(): void {

    this.signinForm = this.fb.group({ studentId: '' });
  }

  //validated the student ID from the form.
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = "Invalid student ID, please try again.";
    }
  }
}
