import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private employees: Object[];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.fetchEmployees();
    console.log(this.employees)  
  }

  getFormattedAddress(address){
   return Object.getOwnPropertyNames(address)
    .map(t => address[t])
    .join(' ,');
  }

}
