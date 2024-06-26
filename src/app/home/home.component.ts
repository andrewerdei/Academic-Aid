import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../image-slider/types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  slides: SlideInterface[] = [
    {url: 'assets/images/planner1.png', title: 'test'},
    {url: 'assets/images/planner2.png', title: 'test2'},
    {url: 'assets/images/grade1.png', title: 'test3'},
    {url: 'assets/images/grade2.png', title: 'Grade Tracker'},
    {url: 'assets/images/grade3.png', title: 'Grade Tracker'}
  ];

}
