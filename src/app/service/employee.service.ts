import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class EmployeeService {
  private employees: Object[];
  private employeeProjects: Object[];

  constructor() { 
    this.employees = new Array();
      for(let i = 1; i< 20; i++){
        this.employees.push({
          Id : i,
          Name : "Name" + i,
          MiddleName: "MiddleName"+i,
          LastName: "LastName"+i,
          Characteristics: "Characteristics"+i,
          PositionId : i,
          PositionName: "Position"+i,
          Address: {
            Country : "UA",
            AdministrativeArea: "Chernivetska",
            City: "Chernivtsi",
            Street: "Komarova",
            Apartment: "38-22",
            PostalCode: "58013"
          }
        });
      }

      this.employeeProjects = new Array();
      for(let i = 1; i <20;i++){
        for(let j=1;j<4;j++){
          this.employeeProjects.push({
            EmployeeId: i,
            ProjectId: j,
            ProjectName: "Project"+j,
            DaysOnProject: i+j
          })
        }
      }
  }
  public fetchEmployees(){
    console.log(this.employees)
    return this.employees;
  }

  public getEmployeeProjects(employeeId: number){
    let employeeProject = this.employeeProjects.filter(t => t['EmployeeId'] == employeeId);
    return employeeProject;
  }
}
