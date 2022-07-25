import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Input() isHeaderFooter:boolean = true;
  serviceArray:any[];
  ngOnInit(): void {
    this.serviceArray= this.dataService.serviceArray.slice()
  }

}
