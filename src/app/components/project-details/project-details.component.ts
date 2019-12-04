import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project = {id : 1, name : 'TCMS2.0', description: 'Turntabl Management System 2.0'};

  constructor() { }

  ngOnInit() {
  }

}
