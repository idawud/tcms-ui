import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  { path : '', component : CustomersComponent },
  { path : 'customers', component : CustomersComponent },
  { path : 'projects', component : ProjectsComponent },
  { path : 'newcustomer', component : CustomersComponent },
  { path : 'newproject', component : CustomersComponent },
  { path : 'reporting', component : CustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
