import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customers = [
    { id : 1, name: 'Dawud Ismail', address: 'North Legon Libya', telephoneNumber: '057652365456', email: 'Email@me.dot' },
    { id : 2, name: 'Duwad Ibrahim', address: 'China town', telephoneNumber: '0245230256', email: 'duwad@mail.fd' },
    { id : 3, name: 'Deniss Ky-09', address: 'Kumasi Russia', telephoneNumber: '0276562226', email: 'Emaicf5@me.dot' },
    { id : 4, name: 'Another Name', address: 'somewhere', telephoneNumber: '020216666', email: 'sender@name.fg' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
