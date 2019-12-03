import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MainComponent } from './components/main/main.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { NewprojectComponent } from './components/newproject/newproject.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';


const routes: Routes = [
  { path : '', component : MainComponent },
  { path : 'customers', component : CustomersComponent },
  { path : 'projects', component : ProjectsComponent },
  { path : 'newcustomer', component : NewcustomerComponent },
  { path : 'newproject', component : NewprojectComponent },
  { path : 'reporting', component : ReportingComponent }
];
// { path : 'projectDetails/:id', component : ProjectDetailsComponent },
// { path : 'customerDetails/:id', component : CustomerDetailsComponent }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
