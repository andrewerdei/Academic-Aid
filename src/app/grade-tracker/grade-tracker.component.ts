import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { TrackerGenService } from '../services/tracker-gen/tracker-gen.service';

@Component({
  selector: 'app-grade-tracker',
  templateUrl: './grade-tracker.component.html',
  styleUrl: './grade-tracker.component.css',
})
export class GradeTrackerComponent {

  courseform: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.courseform = this.fb.group({
      info: this.fb.group({
        stuname: ['' ,{validators: Validators.required}],
        school: ['', {validators: Validators.required}],
        term: ['', {validators: Validators.required}]
    }),
      courses: this.fb.array([
        this.fb.group({
          coursename: ['', {validators: Validators.required}],
          credits: ['', {validators: Validators.required}],
          professor: ['', {validators: Validators.required}],
          email: ['', {validators: Validators.required}],
          categories: this.fb.array([
            this.fb.group({
              category: ['', {validators: Validators.required}],
              weight: ['', {validators: Validators.required}]
            })
          ])

        })
      ])
    })
  }

  trackergenService = inject(TrackerGenService);

  submitTracker() {
    console.log("Tracker Submitted")

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response' as 'response'
    };

    this.downloadtracker()
  }

  downloadtracker() {
    let data = this.courseform.value ?? ''
    let fileName = "Grades_" + String(this.courseform.value['info']['term']) + ".xlsx"
    /*this.http.post<any>('http://127.0.0.1:5000/static/grade-tracker', { data, fileName }).subscribe(data => {
      let re = Response
  })*/

    
    this.trackergenService.download(data, fileName).subscribe((response: any) => {
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
            this.trackergenService.downloadFile(response.body, fileName);
          }
    });
}
  /*dict of class:[[credits, prof, email], (category, weight)...]*/


  get courses(): FormArray{
    return this.courseform.get('courses') as FormArray;
  }

  getcategories(index:number): FormArray{
    return this.courses.at(index).get('categories') as FormArray;
  }

  deleteCourse(index: number) {
    this.courses.removeAt(index);
  }
  

  addCourse() {
    this.courses.push(this.fb.group({
      coursename: ['', {validators: Validators.required}],
      credits: ['', {validators: Validators.required}],
      professor: ['', {validators: Validators.required}],
      email: ['', {validators: Validators.required}],
      categories: this.fb.array([
        this.fb.group({
          category: ['', {validators: Validators.required}],
          weight: ['', {validators: Validators.required}]
        })
      ])
    }));
  }

  addCategory(control: any){
    control.push(
      this.fb.group({
        category: ['', {validators: Validators.required}],
        weight: ['', {validators: Validators.required}]
      })
    )
  }

  deleteCategory(index: any, control: any){
    control.removeAt(index)
  }

  submit() {
    console.log(this.courseform.value);
  }
  
}
