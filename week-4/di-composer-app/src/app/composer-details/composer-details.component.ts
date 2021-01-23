/*
============================================
; Title: composer-details.component.ts
; Author: Professor Krasso
; Date: 16 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
;===========================================
*/ 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {
//Get composer Id from route parameter.
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //Get composer details by composerId.
    if (this.composerId) {
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
