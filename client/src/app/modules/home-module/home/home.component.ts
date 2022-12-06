import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services-module/services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
  isContactComponent= false;
  showMoreBlogs= false;
  serviceArray:any[];
  marginTop= '-40px';

  ngOnInit(): void {
    this.serviceArray= this.dataService.serviceArray.slice(0,4);
  }

  customOptionshome: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 0,
    autoplay:true,
    autoplayTimeout:3400,
    autoplaySpeed: 1500, 
    autoplayHoverPause:false,
    autoplayMouseleaveTimeout: 3000,
    navSpeed: 4500,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        "items": 1
      },
      480: {
        "items": 1
      },
      768: {
        "items": 1
      },
      992: {
        "items": 1
      },
      1200: {
        "items": 1,
      }
    },
  };

}
