import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeProject } from '../model/employeeProject';
import { Address } from '../model/address';
import { API_URL } from '../config';

@Injectable()
export class EmployeeService {
  private employees: Employee[];
  private employeeProjects: EmployeeProject[];

  constructor(private http: Http) { 
  }
  public fetchEmployees() : Observable<Employee[]>{
    return this.http.get(API_URL+'employee')
      .map(res => res.json());
  }

  public getEmployeeProjects(employeeId: number): Observable<EmployeeProject[]>{
    return this.http.get(API_URL+'employee/'+employeeId+'/project')
      .map(res => res.json());
  }
}
