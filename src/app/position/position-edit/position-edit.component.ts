import { Component, OnInit } from '@angular/core';
import { Position } from '../../model/position';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {
  position: Position;
  constructor(  
  ) { }

  ngOnInit() {
    this.position = new Position();
  }

  save() {
    console.log(this.position);
  }

}
