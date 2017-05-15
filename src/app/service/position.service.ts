import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Position } from '../model/position';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';

@Injectable()
export class PositionService {
  private positions: Position[];
  constructor(private http: Http) { 
  }

  fetchPositions() : Observable<Position[]>{
    return this.http.get(API_URL+"position")
      .map(res => res.json());
  }

  addPosition(position: Position){
    position.id = this.positions.length+1;
    this.positions.push(position);
  }


}
