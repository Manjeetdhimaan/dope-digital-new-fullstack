import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';
import { DataService } from './modules/services-module/services/data.service';
import { HttpClient } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('appearInOut', [
      state('in', style({
        'visibility': 'visible',
        'opacity': '1',
        'transform': 'translateY(0px)'
      })),
      state('out', style({
        'visibility': 'hidden',
        'opacity': '0',
        'transform': 'translateY(150px)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements OnInit {
  title = 'dope-digital';
  blogs: any;
  animationState = 'in';
  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService, private metaService: Meta, private http: HttpClient) {

  }

  isSingleService: boolean = false;
  isBlog: boolean = false;
  ngOnInit() {
    //updating app title and meta tags.
    const appTitle = this.titleService.getTitle();
    
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          this.dataService.serviceArray.map((a: any) => {
            if (this.router.url.toLowerCase() === "/" + a.name.toLowerCase().split(' ').join('-')) {
              this.router.url.toLowerCase();
              this.isSingleService = true;
            }
          })

          const child = this.activatedRoute.firstChild;
          const blogChild = this.activatedRoute.firstChild?.firstChild?.routeConfig?.data?.['isBlog'];
          //logged in user
          if (blogChild) {
            if (child?.snapshot.data['title']) {
              const userJson = localStorage.getItem('blog');
              let blog;
              if(userJson !== null){
                 blog = userJson !== null ? JSON.parse(userJson) : {};
              }
              // child.snapshot.data['title'] = this.capitalizeFirstLetter(this.router.url.slice(7).split('-').join(' ')) + ' - ' + 'Dope Digital';
              child.snapshot.data['title'] = blog.metaTitle + ' - ' + 'Dope Digital';
              this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${this.router.url.slice(1)}` });
              this.metaService.updateTag({ name: 'description', content: blog.metaDesc });
              // this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(7).split('-').join(' ')) });
              return child.snapshot.data['title'];
            }
            // if (this.router.url.toLowerCase() === "/blogs") {
            //   if (child?.snapshot.data['title']) {
            //     child.snapshot.data['title'] = 'BLOGS - Dope Digital';
            //     return child.snapshot.data['title'];
            //   }
            // }
          }
          if (this.router.url.toLowerCase() === "/blogs") {
            if (child?.snapshot.data['title']) {
              child.snapshot.data['title'] = 'BLOGS - Dope Digital';
              this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/blogs` });
              this.metaService.updateTag({ name: 'description', content: `Blogs from Dope Digital` });
              return child.snapshot.data['title'];
            }
          }
          // this.blogs.map((a: any) => {
          //   if (this.router.url.toLowerCase() === "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
          //     if (child?.snapshot.data['title']) {
          //       this.isBlog = false;
          //       child.snapshot.data['title'] = this.capitalizeFirstLetter(this.router.url.slice(7).split('-').join(' ')) + ' - ' + 'Dope Digital';
          //       this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${this.router.url.slice(1)}` });
          //       this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(7).split('-').join(' ')) });
          //       return child.snapshot.data['title'];
          //     }

          //   }
          //   if (this.router.url.toLowerCase() === "/blogs") {
          //     if (child?.snapshot.data['title']) {
          //       child.snapshot.data['title'] = 'BLOGS - Dope Digital';
          //       return child.snapshot.data['title'];
          //     }

          //     return 'BLOGS - Dope Digital';
          //   }
          // })

          if (child?.snapshot.data['title']) {
            if (this.isSingleService == true) {
              if(this.router.url.toLowerCase() === "/logo-design" ) {
                child.snapshot.data['title'] = 'Logos, Branding & Graphic Design - Dope Digital';
                this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${this.router.url.slice(1)}` });
                this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(1).split('-').join(' ')) });
                return child.snapshot.data['title'];
              }
              this.isSingleService = false;
              child.snapshot.data['title'] = this.router.url.slice(1).split('-').join(' ').toUpperCase() + ' - ' + 'Dope Digital';
              this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${this.router.url.slice(1)}` });
              this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(1).split('-').join(' ')) });
              return child.snapshot.data['title'];
            }
            else {
              this.metaService.updateTag({ name: 'description', content: `Dope digital is best digital marketing agency in Chandigarh` });
              return child.snapshot.data['title'];
            }
          }

          let routerUrl_split = this.router.url.slice(1).split("-")
          let result = []
          for (let i = 0; i < routerUrl_split.length; i++) {
            result.push(routerUrl_split[i].slice(0, 1).toUpperCase() + routerUrl_split[i].slice(1))
          }

          if (child?.snapshot.data['metaUrl'] && !this.isSingleService) {
            this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${child.snapshot.data['metaUrl']}` });
          }
          this.metaService.updateTag({ name: 'description', content: `Dope digital is best digital marketing agency in Chandigarh` });
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }

  capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.animationState = "out"
      return
      //Do your action here
    }
    this.animationState = 'in'
  }
}
