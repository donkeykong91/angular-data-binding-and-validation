import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'order-sheet',
  templateUrl: 'app/counter/order-sheet/order-sheet.component.html',
  styleUrls: ['app/counter/order-sheet/order-sheet.component.css']
})
export class OrderSheetComponent {
  orderSheetForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  private buildForm() {
    this.orderSheetForm = this.formBuilder.group({
      customerName: this.formBuilder.control(null),
      specialtySandwich: this.formBuilder.control(null),
      otherNotes: this.formBuilder.control(null),
      meats: this.formBuilder.group({
        meatHam: this.formBuilder.control(null),
        meatTurkey: this.formBuilder.control(null),
        meatRoastBeef: this.formBuilder.control(null)
      }),
      cheeses: this.formBuilder.group({
        cheeseProvolone: this.formBuilder.control(null),
        cheeseCheddar: this.formBuilder.control(null),
        cheeseSwiss: this.formBuilder.control(null)
      }),
      veggiesAndSuch: this.formBuilder.group({
        veggieLettuce: this.formBuilder.control(null),
        veggieTomato: this.formBuilder.control(null),
        veggieMustard: this.formBuilder.control(null)
      })      
    });
  }
}
