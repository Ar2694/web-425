/*
============================================
; Title: wishlist-create.component.ts
; Author: Professor Krasso
; Date: 06 Feburary 2021
; Modified By: Arlix Sorto
; Description: Exercise 6.2 - Output Properties
;===========================================
*/ 
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  item: IWishlistItem;

  // Tells Angular to create a new event emitter and that the data it emits is IWishlistItem type. 
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  constructor() { 
    this.item = {} as IWishlistItem;
    
  }

  ngOnInit(): void {
  }

  //AddItem function let the parent know about the event and send data to the parent.
  addItem(){
    this.addItemEmitter.emit({ 
      title: this.item.title,
       authors: this.item.authors
      });

    
    this.item = {} as IWishlistItem;
  }
}
