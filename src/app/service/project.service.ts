import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  private projects: Object[];
  constructor() {
    this.projects = new Array();
    for(let i = 1; i<4; i++){
      let now = Date.now();
      this.projects.push({
        Id: i,
        Title: "Project"+i,
        StartDate: Date.now(),
        EndDate: "2017",
        Description: "Description of project"+i
      })
    }

   }

   public fetchProjects(){
     return this.projects;
   }
  
}
