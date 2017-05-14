import { Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';
import { EmployeeProjectsComponent } from './employee/employee-projects/employee-projects.component';

export const routes: Routes = [
    { path: "", redirectTo: "position", pathMatch: "full" },
    { path: "employee", component: EmployeeComponent },
    { path: "position", component: PositionComponent },
    { path: "employee/:id/projects", component: EmployeeProjectsComponent  }
]