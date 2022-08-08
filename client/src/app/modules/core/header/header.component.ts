import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services-module/services/data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('appearInOut', [
      state('in', style({
        'height': '100vh',
        'margin-top': '1rem'
      })),
      state('out', style({
        'height': '0',
        'margin-top': '1rem'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  isSticky:boolean=false;
  isLoading:boolean=false;
  animationState = 'out';
  isMobileMenu:boolean=false;
  menuBtnClick: boolean = false;

  // changing header on scrolling down
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
      this.isSticky = window.pageYOffset >= 90;
  }

  constructor(private router: Router, private dataService: DataService, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      // closing mobile menu onclick outside
      if (!this.menuBtnClick) {
        this.isMobileMenu = false;
        this.animationState='out';
      }
      else {
        this.menuBtnClick = false;
      }
      this.menuBtnClick = false;
    });
  }

  // prevent close mobile menu when clicked inside
  preventCloseOnClick() {
    this.menuBtnClick = true;
  }

  ngOnInit(): void {
  }

  // navigate to particular component
  onNavigate(route:string) {
    window.scrollTo({
      behavior:'auto',
      top:0
    });
    this.router.navigate([route]);
  }

  // navigate to single service component
  onNavigateToService(route: any) {
    this.isLoading=true;
    this.dataService.getServices().map((a: any) => {
      if (route.toLowerCase() == a.name.toLowerCase().split(' ').join('-')) {
        this.router.url.toLowerCase();
        this.dataService.getSelectedService.next(a);
        window.scrollTo(0,0)
        this.router.navigate(['/', route]); 
        this.isLoading = false
      }
    })
  }
  
  // toggle mobile menu
  onToggleMobileMenu() {
    this.isMobileMenu = !this.isMobileMenu;
    this.animationState= this.animationState=='in'?'out':'in'
  }

}
