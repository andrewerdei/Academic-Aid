import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PlannerGenService } from '../services/planner-gen/planner-gen.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'academic-planner',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './academic-planner.component.html',
  styleUrl: './academic-planner.component.css'
})
export class AcademicPlannerComponent {
  postId: any;
  start: any;
  end: any;

  constructor( private http: HttpClient ) { }

  plannergenService = inject(PlannerGenService);
  generatePlanner = new FormGroup({
    start: new FormControl(""),
    end: new FormControl("")
  });

  submitPlanner() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };

    this.downloadexcel()

  }

  downloadexcel() {
    let start = this.generatePlanner.value.start ?? ''
    let end = this.generatePlanner.value.end ?? ''
    let year1 = start.split('/')[1]
    let year2 = end.split('/')[1]
    let fileName = "AcademicPlanner_" + year1 + "-" + year2 + ".xlsx"
    this.plannergenService.download(start, end, fileName).subscribe((response: any) => {
        if ('application/json' === response.headers.get('Content-Type')) {
            const reader = new FileReader();
            reader.addEventListener('loadend', (e:any) => {
              console.log(JSON.parse(e.srcElement['result']));
              let errorResponse = JSON.parse(e.srcElement['result']);
              console.log('Message - got json instead of file', errorResponse.message);
            });
            reader.readAsText(response.body);
          } else {
            console.log('File downloaded successfully.');
            this.plannergenService.downloadFile(response.body, fileName);
          }
    });
}

}

interface Planner{
  id: number;
  start: string;
  end: string;
}
