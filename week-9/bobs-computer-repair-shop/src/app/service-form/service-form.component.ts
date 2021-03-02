/*
============================================
; Title: service-form.component.ts
; Author: Professor Krasso
; Date: 27 Feburary 2021
; Modified By: Arlix Sorto
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BobsService } from '../service.interface';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceSummaryDialogComponent } from '../invoice-summary-dialog/invoice-summary-dialog.component';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
  title: string;
  serviceForm: FormGroup;
  errorMessage: string;
  isCheckBoxChecked: boolean = false;
  invoiceSummary: Array<BobsService> = [];
  invoice_Summary: BobsService;
  selectedService: Array<BobsService>;

  selectableService: Array<any> = [
    {
      service_id: 0,
      service: 'Password Reset',
      price: 39.99,
      isChecked: false,
    },
    {
      service_id: 1,
      service: 'Spyware Removal',
      price: 99.99,
      isChecked: false,
    },
    { service_id: 2, service: 'RAM Upgrade', price: 129.99, isChecked: false },
    {
      service_id: 3,
      service: 'Software Installation',
      price: 49.99,
      isChecked: false,
    },
    { service_id: 4, service: 'Tune-up', price: 99.99, isChecked: false },
    {
      service_id: 5,
      service: 'Keyboard Cleaning',
      price: 45.99,
      isChecked: false,
    },
    {
      service_id: 6,
      service: 'Disk Clean-up',
      price: 149.99,
      isChecked: false,
    },
  ];

  constructor(private fb: FormBuilder, private dialogBox: MatDialog) {
    this.title = 'Bob Computer Service Form';
  }

  //Initialize service form controls
  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      partCost: ['', Validators.compose([Validators.required, Validators.pattern(/^\-?\d+((\.|\,)\d+)?$/),])],
      laborHours: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      services: ['', Validators.required]
    });

  }

  //Stores the selected services into the array.
  fetchSelectedItems(element: HTMLInputElement, index: Number) {

    // get current service of the changes element by ID
    const currentIndex = this.selectableService.findIndex(
      (value) => value.service_id === index
    );

    this.selectableService[currentIndex].isChecked = element.checked;
    this.selectedService = this.selectableService.filter(
      (value) => value.isChecked
    );

    //Check if any checkboxes that are checked.
    if (!Array.isArray(this.selectedService) || !this.selectedService.length) {

      this.isCheckBoxChecked = false;

    } else {
      this.isCheckBoxChecked = true;

    }

  }

  //On submit will push the selected services and calculated cost into the invoice summary array.
  onSubmit() {
    let service_Cost = 0;
    let selected_services = this.selectableService.filter((value) => value.isChecked);

    for (let service of selected_services) {
      service_Cost += service.price;
    }
    this.invoiceSummary.push({
      partCost: this.form.partCost.value,
      laborCost: this.form.laborHours.value * 50,
      laborHours: this.form.laborHours.value,
      services: selected_services,
      totalCost: Number(service_Cost) + Number(this.form.partCost.value) + Number((this.form.laborHours.value * 50)),
    });
 
  }

  //Display the invoive summary dialog box.
 showInvoiceSummary(){

  const dialogRef = this.dialogBox.open(InvoiceSummaryDialogComponent, {
    data: {
      invoiceSummary: this.invoiceSummary[0]
    },
    disableClose: true,
    width: '750px',
  });


  dialogRef.afterClosed().subscribe((result) => {
    if (result === 'confirm') {

      this.invoiceSummary[0].services = [];
      this.invoiceSummary = [];

    }
  });
}

//Get the service from controls.
  get form() {
    return this.serviceForm.controls;
  }
}
