/*
============================================
; Title: wishlist.component.ts
; Author: Professor Krasso
; Date: 06 Feburary 2021
; Modified By: Arlix Sorto
; Description: Exercise 6.2 - Output Properties
;===========================================
*/ 
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';
 
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  //Push a new item to the array.
  updateItemsHandler(item: IWishlistItem){
    this.items.push(item);
  }
}
