import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlannerGenService {

  constructor() { }

  submitPlanner(start: string, end: string){
    console.log(start, end);
  }
}
