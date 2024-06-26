import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class TrackerGenService {
  
  baseUrl:string = "http://127.0.0.1:5000"
  constructor(private http: HttpClient) { }

  download(data: string, fileName: string) {
    return this.http.post('http://127.0.0.1:5000/static/grade-tracker', {data, fileName}, { observe: 'response', responseType: 'blob'});
  }
  
  downloadFile(data: Response | any, fileName: string) {
    const blob: Blob = data as Blob
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }
}
