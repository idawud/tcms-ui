import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiURL = 'https://mysterious-peak-14776.herokuapp.com/customer';
  constructor(private httpClient: HttpClient) { }

getCustomers(): Observable<Customer[]> {
  return this.httpClient.get<Customer[]>(this.apiURL);
}

}
