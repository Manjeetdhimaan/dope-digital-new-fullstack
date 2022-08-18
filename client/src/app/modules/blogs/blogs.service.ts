import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class BlogsService {
  blogsArray:any;
  getBlogsArray = new Subject<any>();
  constructor(private http: HttpClient) { 
      this.http.get(`http://localhost:4949/getBlogs`).subscribe((res:any) => {
      //logged in user
      this.blogsArray = res;
      // getting attendance of logged in user
    },
      error => {
        console.log(error);
      })
  }

  onGetBlogs() {
    return this.blogsArray.slice();
  }

  getBlogs() {
     return this.http.get(`http://localhost:4949/getBlogs`).toPromise();
  // return this.blogsArray1;

  }
    // return this.blogsArray.slice();

  getselectedBlog = new Subject<any>();

}