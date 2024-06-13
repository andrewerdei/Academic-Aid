import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../services/examples/examples.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  examples: string[] = [];
  constructor(private examplesService:ExamplesService) { }

  ngOnInit(): void {
    this.examples = this.examplesService.getAll();
  }

}
