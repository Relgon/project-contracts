import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { Position } from '../model/position';
import { PositionService } from '../service/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  private positions: Position[];
  constructor(public dialog: MdDialog, private positionService: PositionService) { }

  ngOnInit() {
    let pos;
    this.positionService.fetchPositions().subscribe(t => this.positions = t);
  }

  deleteItem(positionId){
    let dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let index = this.positions.findIndex(t => t.id == positionId);
        this.positions.splice(index,1);
      }
    });
  }
}
