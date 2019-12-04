import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer = { id : 1, name: 'Dawud Ismail', address: 'North Legon Libya', telephoneNumber: '057652365456', email: 'Email@me.dot' };

  constructor() { }

  ngOnInit() {
  }

}
