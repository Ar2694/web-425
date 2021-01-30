/*
============================================
; Title: book.interface.ts
; Author: Professor Krasso
; Date: 29 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 5.2 - Navigation and Layout
;===========================================
*/ 
export interface IBook{
    isbn: string,
    title: string,
    description: string, 
    numOfPage: number,
    author: Array<string>
}