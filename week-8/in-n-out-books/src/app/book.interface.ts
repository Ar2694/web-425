/*
============================================
; Title: book.interface.ts
; Author: Professor Krasso
; Date: 30 January 2021
; Modified By: Arlix Sorto
; Description: Exercise 5.3 - Data Tables
;===========================================
*/ 
export interface IBook{
    isbn: string,
    title: string,
    description: string, 
    numOfPages: number,
    authors: Array<string>
}