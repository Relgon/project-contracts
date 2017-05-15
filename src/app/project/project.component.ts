import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../model/project';
import {DateFormatPipe} from 'angular2-moment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  private projects: Project[];
  constructor(private projectService : ProjectService ) { }

  ngOnInit() {
    this.projectService.fetchProjects()
      .subscribe(t => {
      this.projects = t;
    });
  }
}
