import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  private positions: Object[];
  constructor() { }

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
}
