import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [];
  constructor(private service: ProjectService) { }

  ngOnInit() {
    this.service.getProjects().subscribe(
      result => {
          this.projects = result;
          console.log(result);
      },
      error => { console.log(error); }
   );
  }

}
