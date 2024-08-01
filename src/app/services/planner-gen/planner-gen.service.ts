import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PlannerGenService {
  constructor(private http: HttpClient) { }

  download(start: string, end: string, fileName: string) {
    return this.http.post('https://www.academicaid.xyz/static/academic-planner', {start, end, fileName}, { observe: 'response', responseType: 'blob'});
  }
  
  downloadFile(data: Response | any, fileName: string) {
    const blob: Blob = data as Blob
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }


}
