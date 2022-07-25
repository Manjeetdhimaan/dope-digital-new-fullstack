import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsService } from 'src/app/modules/blogs/blogs.service';
import { ToasTMessageService } from 'src/app/services/toastr.service';
@Component({
  selector: 'app-blogs-description',
  templateUrl: './blogs-description.component.html',
  styleUrls: ['./blogs-description.component.scss']
})
export class BlogsDescriptionComponent implements OnInit, OnDestroy {
  blogsArray: any[];
  isLoading: boolean = false;
  latestBlogs: any;
  moreBlogs: any;
  blog: any;
  subscription: Subscription;
  isError:boolean = false;

  constructor(private blogService: BlogsService,
    private router: Router,
    private activatedRoute: ActivatedRoute, private toastService: ToasTMessageService) {
    router.events
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          this.isLoading = true;
          activatedRoute.params.subscribe((param: Params) => {
            this.blogService.blogsArray.map((a: any) => {
              if (param['blog'].toLowerCase() == a.urlTitle.toLowerCase().split(' ').join('-')) {
                this.blog = a;
                this.latestBlogs = this.blogService.blogsArray.slice(-8).reverse();
                this.isLoading = false;
                this.isError= false;
              }
            })
          })
        }
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.blogService.getBlogs().then((blogs: any) => {
      blogs.map((a: any) => {
        if (this.router.url.toLowerCase() == "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
          this.router.url.toLowerCase();
          this.blog = a;
          this.toastService.success(`${a.urlTitle}`);
          // let blogs = this.blogService.blogsArray.slice(-10).reverse();
          // this.moreBlogs = blogs.sort(() => 0.5 - Math.random());
          this.latestBlogs = blogs.slice(-8).reverse();
          this.isLoading = false;
          this.isError= false;
          // this.latestBlogs = this.blogService.blogsArray.slice(-8).reverse();
        }
      })
      if (this.router.url.toLowerCase() !== "/blogs/" + this.blog?.urlTitle.toLowerCase().split(' ').join('-')) {
        this.router.navigate(['/404notfound']);
        this.isLoading = false;
        
      }
    }).catch((err) => {
      this.toastService.error(err.message);
      this.isLoading = false;
      this.isError= true;
    })
    // this.blogService.getBlogs().map((a: any) => {
    //       if (this.router.url.toLowerCase() == "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
    //         this.router.url.toLowerCase();
    //         this.blog = a;
    //         this.toastService.success(`${a.urlTitle}`);
    //         // let blogs = this.blogService.blogsArray.slice(-10).reverse();
    //         // this.moreBlogs = blogs.sort(() => 0.5 - Math.random());
    //         this.isLoading = false;
    //         this.isError= false;
    //         // this.latestBlogs = this.blogService.blogsArray.slice(-8).reverse();
    //       }
    //     })
    // this.latestBlogs = this.blogService.getBlogs().slice(-4).reverse();
    this.subscription = this.blogService.getselectedBlog.subscribe((blog: any) => {
      this.blog = blog;
    })
  }

  capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onNavigate(blog: any) {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
    this.blog = blog;

    const selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
    this.router.navigate(['/blogs/', selectedBlog]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
