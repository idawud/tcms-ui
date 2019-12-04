import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service: CustomersService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      const data = JSON.stringify(this.registerForm.value, null, 4);
      this.service.postCustomer(JSON.parse(data)).subscribe(
        result => { console.log(result); },
        error => { console.log(error); }
      );
      alert('SUCCESS!! :-)\n\n' + data + '\n\n' + JSON.parse(data));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
