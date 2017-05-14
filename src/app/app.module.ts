import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MaterialModule } from '@angular/material';
//import {MdInputModule}    from '@angular/material';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProjectsComponent } from './employee/employee-projects/employee-projects.component';

import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    EmployeeComponent,
    EmployeeProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
