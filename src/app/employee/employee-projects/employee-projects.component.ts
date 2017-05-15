import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { EmployeeService } from '../../service/employee.service';
import { EmployeeProject } from '../../model/employeeProject';

@Component({
  moduleId: module.id,
  selector: 'app-employee-projects',
  templateUrl: './employee-projects.component.html',
  styleUrls: ['./employee-projects.component.css']
})
export class EmployeeProjectsComponent implements OnInit {
  public id: number;
  public sub: any;
  public employeeProjects: EmployeeProject[];
  constructor(private route: ActivatedRoute, 
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.id =+params['id'])
    this.employeeService.getEmployeeProjects(this.id)
      .subscribe(t => {
      this.employeeProjects = t;
      console.log(this.employeeProjects, 'EMPLOYEE PROJECTS');
    });
    
  }

}
