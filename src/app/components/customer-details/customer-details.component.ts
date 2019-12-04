import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer;
  private id: string;

  constructor(private route: ActivatedRoute, private service: CustomersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.service.getCustomerById(this.id).subscribe(
      result => {
        this.customer = result;
        console.log(result);
    },
    error => { console.log(error); }
    );
  }
}
