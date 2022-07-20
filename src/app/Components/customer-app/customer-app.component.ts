import { Component, OnInit } from '@angular/core';
import { Customer } from './customer-app.model';

@Component({
  selector: 'app-customer-app',
  templateUrl: './customer-app.component.html',
  styleUrls: ['./customer-app.component.css']
})
export class CustomerAppComponent implements OnInit {
  CustomerModel: Customer;
  CustomerModels: Array<Customer>;
  constructor() {
    this.CustomerModel = new Customer();
    this.CustomerModels = new Array<Customer>();
  }

  ngOnInit(): void {
  }
  display() {
    alert("Hello");
  }
  add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();//Clear UI
  }
}
