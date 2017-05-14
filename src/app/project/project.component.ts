import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private projects: Object[];
  constructor(private projectService : ProjectService ) { }

  ngOnInit() {
    this.projects = this.projectService.fetchProjects();
  }
}
