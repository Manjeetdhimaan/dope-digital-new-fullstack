import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/modules/blogs/blogs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private blogService: BlogsService) { }

  latestBlogs:any[];
  isLoading: boolean = false;
  isError: boolean = false;
  ngOnInit(): void {
    this.isLoading = true;
    this.blogService.getBlogs().then((blogs:any) => {
      this.latestBlogs = blogs.slice(-3).reverse();
      this.isLoading = false;
      this.isError = false;
    }).catch((err) => {
      console.log(err);
      this.isLoading = false;
      this.isError = true;
    })
    // this.latestBlogs= this.blogService.blogsArray.slice(-3).reverse();
  }

  onNavigateToBlog(blog:any) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    localStorage.setItem("blog", JSON.stringify(blog));
    const selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
    this.blogService.getselectedBlog.next(blog);
    this.router.navigate(['/blogs/', selectedBlog]);
  }
 
  onNavigate(route:string) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    this.router.navigate([route]);
  }
}