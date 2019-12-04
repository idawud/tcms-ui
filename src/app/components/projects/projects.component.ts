import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {id : 1, name : 'TCMS2.0', description: 'Turntabl Management System 2.0'},
    {id : 2, name : 'Trober', description: 'Uber service for trotros in Ghana'},
    {id : 3, name : 'LAB Management System', description: 'Laboratory Manangement System for Madina Clinic'},
    {id : 4, name : 'Free Ride', description: 'App to free ride from friends and stranger on the same commute route'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
