/*
============================================
; Title: service.interface.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
export interface BobsService{
    partCost: Number,
    laborHours: Number,
    laborCost:Number,
    totalCost: Number,
    services: Array<any>
}