import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PlannerGenService } from '../services/planner-gen/planner-gen.service';

@Component({
  selector: 'academic-planner',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './academic-planner.component.html',
  styleUrl: './academic-planner.component.css'
})
export class AcademicPlannerComponent {
  plannergenService = inject(PlannerGenService);
  generatePlanner = new FormGroup({
    start: new FormControl(""),
    end: new FormControl("")
  });

  submitPlanner() {
    this.plannergenService.submitPlanner(
      this.generatePlanner.value.start ?? '',
      this.generatePlanner.value.end ?? ''
    );
  }
}
