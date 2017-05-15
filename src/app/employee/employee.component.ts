import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { Address } from '../model/address';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private employees: Employee[];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
   this.employeeService.fetchEmployees()
      .subscribe(t => this.employees = t) 
  }

  getFormattedAddress(address: Address){
    console.log(this.employees);
    return address.country+', '+address.city
      +', ' + address.street+ ', ' +address.apartment +', '+address.postalCode;
  }

}
