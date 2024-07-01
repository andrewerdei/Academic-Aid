import { Component, inject } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { PlannerGenService } from '../services/planner-gen/planner-gen.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'academic-planner',
  templateUrl: './academic-planner.component.html',
  styleUrl: './academic-planner.component.css'
})
export class AcademicPlannerComponent {
  postId: any;
  start: any;
  end: any;
  plannerform: FormGroup;
  error: any = null;

  constructor( private fb: FormBuilder, private http: HttpClient ) {
    this.plannerform = this.fb.group({
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
    })
   }

  plannergenService = inject(PlannerGenService);

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
    let start = String(this.plannerform.value.start)
    let end = String(this.plannerform.value.end)
    let year1 = start.split('-')[0]
    let year2 = end.split('-')[0]

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
        } 
        else {
          console.log('File downloaded successfully.');
          this.plannergenService.downloadFile(response.body, fileName);
        }
    },
  (error) => {
    error.error.text().then((text: string) => {
      this.error = text;
      let error_msg = text;
      console.log(error_msg)
  });
});}
}
