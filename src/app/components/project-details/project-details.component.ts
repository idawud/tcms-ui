import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project;
  id: string;

  constructor(private route: ActivatedRoute, private service: ProjectService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.service.getProjectById(this.id).subscribe(
      result => {
        this.project = result;
        console.log(result);
    },
    error => { console.log(error); }
    );
  }
  delete(id: any) {
    console.log(id);
  }
}
