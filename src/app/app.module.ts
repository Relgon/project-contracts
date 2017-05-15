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
import { PositionEditComponent } from './position/position-edit/position-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProjectsComponent } from './employee/employee-projects/employee-projects.component';
import { ProjectComponent } from './project/project.component';

import { EmployeeService } from './service/employee.service';
import { ProjectService } from './service/project.service';
import { PositionService } from './service/position.service';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    EmployeeComponent,
    EmployeeProjectsComponent,
    ProjectComponent,
    DeleteConfirmationComponent,
    PositionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService,ProjectService,PositionService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteConfirmationComponent]
})
export class AppModule { }
