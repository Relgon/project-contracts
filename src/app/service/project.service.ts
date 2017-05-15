import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http'
import { API_URL } from '../config';

@Injectable()
export class ProjectService {
  private projects: Project[];
  constructor(private http: Http) {}

   public fetchProjects(): Observable<Project[]>{
     
     return this.http.get(API_URL+'project')
      .map(res => res.json());
   }
  
}
