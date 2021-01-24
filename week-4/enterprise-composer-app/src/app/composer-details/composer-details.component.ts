/*
============================================
; Title: composer-details.component.ts
; Author: Professor Krasso
; Date: 24 January 2021
; Modified By: Arlix Sorto
; Description: Assignment 4.4 - Async Pipe
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

    //Get composer Id from url using ActivatedRoute.
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    // Set a composer details by composerId.
    if (this.composerId) {
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
