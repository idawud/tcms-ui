import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiURL = 'https://desolate-reaches-15540.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.apiURL);
  }
  postProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.apiURL + '/project/add/', project, httpOptions);
  }
  getProjectById(id: string): Observable<Project> {
    return this.httpClient.get<Project>(this.apiURL + '/project/search/id/' + id);
    }
}
