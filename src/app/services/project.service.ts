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
  private apiURL = 'https://mysterious-peak-14776.herokuapp.com/customer/';
  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.apiURL);
  }
  postCustomer(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.apiURL, project, httpOptions);
  }
  getCustomerById(id: string): Observable<Project> {
    return this.httpClient.get<Project>(this.apiURL + id);
    }
}
