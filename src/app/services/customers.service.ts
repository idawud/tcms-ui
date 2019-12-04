import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class CustomersService {
  private apiURL = 'https://mysterious-peak-14776.herokuapp.com/customer';
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiURL);
  }
postCustomer(customer: Customer): Observable<Customer> {
  return this.httpClient.post<Customer>(this.apiURL, customer, httpOptions);
}

}
