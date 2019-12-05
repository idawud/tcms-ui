import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewprojectComponent } from './components/newproject/newproject.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { MainComponent } from './components/main/main.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersService } from './services/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProjectsComponent,
    NewprojectComponent,
    NewcustomerComponent,
    ReportingComponent,
    MainComponent,
    ProjectDetailsComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
