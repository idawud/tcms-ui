import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})


export class CustomersComponent implements OnInit {

  constructor(private service: CustomersService) {
  }
  customers = [];
  ngOnInit() {
    this.service.getCustomers().subscribe(
      result => {
          this.customers = result;
          console.log(result);
      },
      error => { console.log(error); }
   );
  }

}
