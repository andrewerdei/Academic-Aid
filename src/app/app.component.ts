import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'academic-aid';
  postId: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<Article>('https://jsonplaceholder.typicode.com/posts', { name: 'Test post request' }).subscribe(data => {
      this.postId = data.name;
      console.log(this.postId)
  })
  
}
}

interface Article{
  id: number;
  name: string;
}