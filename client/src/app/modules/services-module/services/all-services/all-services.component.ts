import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService, private router: Router) { }
  service:any;
  isLoading:boolean = false;
  serviceArray:any[];
  isSingleServiceHeader= false;
  subscription: Subscription;

  ngOnInit(): void {
    this.isLoading= true
    this.serviceArray= this.dataService.serviceArray.slice()
    this.dataService.getServices().map((a: any) => {
      if (this.router.url.toLowerCase() == "/" + a.name.toLowerCase().split(' ').join('-')) {
        this.router.url.toLowerCase();
        this.service = a;
          this.isLoading = false
        
      }
    })
    if (this.router.url.toLowerCase() !== "/" + this.service?.name.toLowerCase().split(' ').join('-')) {
      this.router.navigate(['/404notfound']);
      this.isLoading = false;
    }
    this.subscription = this.dataService.getSelectedService.subscribe((service:any) => {
      this.service= service;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
