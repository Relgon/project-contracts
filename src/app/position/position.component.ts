import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  private positions: Object[];
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    this.positions = new Array();
    for (let i = 1; i < 20; i++){
      this.positions.push({
        Id : i,
        Name : "Pos"+i,
        Salary : 200*i
     });
    }
    console.log(this.positions)
  }

  deleteItem(positionId){
    let dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let index = this.positions.findIndex(t => t['Id'] == positionId);
        this.positions.splice(index,1);
      }
    });
  }
}
