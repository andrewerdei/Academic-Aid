import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  constructor() { }

  getAll(): string[]{
    return [
      './assets/images/grades.png',
      './assets/images/grades2.png',
      '/assets/images/grades3.png',
      '/assets/images/planner.png',
      '/assets/images/planner2.png'
    ];
  }
}
