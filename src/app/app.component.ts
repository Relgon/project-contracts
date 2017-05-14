import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links = [
    { path: '/employee', icon: 'list', label: 'Employees'},
    { path: '/position', icon: 'list', label: 'Positions'},
    { path: '/project', icon: 'assignment', label: 'Projects'}
  ]

  ngOnInit() {
    console.log(this.links)
  }
}
