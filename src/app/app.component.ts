import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links = [
    { path: '/employee', icon: 'home', label: 'Employees'},
    { path: '/position', icon: 'home', label: 'Positions'}
  ]

  ngOnInit() {
    console.log(this.links)
  }
}
