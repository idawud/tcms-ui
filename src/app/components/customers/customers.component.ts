import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  apiURL: string = ' https://mysterious-peak-14776.herokuapp.com/customer';
  customers: object;

  constructor(private h: HttpClient) {
  }

  ngOnInit() {
  }

}
