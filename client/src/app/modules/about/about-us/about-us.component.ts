import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor() { }

  isHeaderFooter= false;
  @Input() isContactComponent:boolean = true;
  @Input() showAbout:boolean = true;

  ngOnInit(): void {
  }
}
